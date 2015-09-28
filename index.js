'use strict';

// get an env in here

// find all configs
var argv = require('yargs').argv;
var negate = require('lodash.negate');
var isObject = require('lodash.isobject');
var isUndefined = require('lodash.isundefined');
var merge = require('lodash.merge');
var requireDir = require('require-dir');
var resolverRevolver = require('resolver-revolver');
var util = require('util');
var zipObject = require('lodash.zipobject');

module.exports = function (options) {
  // patch our console
  var defaults = {
    console: zipObject(['log', 'info', 'warn', 'error'].map(function (level) {
      return [level, function () {}];
    })),
    transformResult: transformResult,
    default: 'development'
  };

  if (isUndefined(options)) {
    options = {};
  }
  if (!isObject(options)) {
    throw {
      name: 'Error',
      message: 'Expected options to be an object'
    };
  }

  options = merge({}, defaults, options);
  var log = options.console.log;

  // Set up the fetching of all modules in ./targets

  // Show the world where we will look for modules
  log(util.format('Looking for targets in %s',
    options.targets));

  // Grab those modules
  var targets = requireDir(options.targets);

  // And give feedback on which ones we have found.
  log(util.format('Found %s: %s',
    Object.keys(targets).length,
    Object.keys(targets).join(', ')
  ));

  // suckage, refactor this dude
  var platforms = {
    one: one,
    current: current,
    all: all,
    availableConfigs: availableConfigs
  };

  return platforms;

  // functions

  function transformResult(config) {
    return config;
  }

  function current() {
    var fromNodeEnv = validateNodeEnv();
    var target = targets[fromNodeEnv];

    return options.transformResult(target, fromNodeEnv);
  }

  function one(name) {
    return targets[name];
  }

  function all() {
    return targets;
  }

  function availableConfigs() {
    return Object.keys(targets);
  }

  function validateNodeEnv() {
    var resolved = resolverRevolver.parse({
      console: options.console,
      context: {
        argv: argv,
        process: {
          env: process.env
        }
      },
      resolvables: {
        'nodeEnv': {
          from: ['argv.NODE_ENV', 'process.env.NODE_ENV'],
          default: options.default,
          preconditions: [{
            name: 'is defined',
            fn: negate(isUndefined)
          }, {
            name: 'is available config',
            fn: function (value) {
              return availableConfigs().indexOf(value) !== -1;
            }
          }],
          throwOnNoResolution: true
        }
      }
    });

    return resolved.nodeEnv();
  }
};
