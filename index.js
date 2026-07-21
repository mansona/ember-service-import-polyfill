'use strict';

var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: require('./package').name,

  included: function (app) {
    this._super.included.apply(this, arguments);

    let checker = new VersionChecker(this.project);
    let dep = checker.for('ember-source');

    if (dep.lt('4.1.0')) {
      app.options = app.options || {};
      app.options.babel = app.options.babel || {};
      app.options.babel.plugins = app.options.babel.plugins || [];

      app.options.babel.plugins.push(require.resolve('./babel-plugin.js'));
    }
  },
};
