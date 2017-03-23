'use strict';

module.exports = app => {
  app.view.use('jade', require('./lib/view'));
};