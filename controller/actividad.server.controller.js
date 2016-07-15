'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */
module.exports = _.extend(
	require('./Activity/activity.find.server.controller'),
	require('./Activity/activity.findByName.server.controller'),
	require('./Activity/activity.create.server.controller'),
	require('./Activity/activity.remove.server.controller'),
	require('./Activity/activity.update.server.controller')

);
