'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */
module.exports = _.extend(
	require('./Membership/membership.find.server.controller'),
	require('./Membership/membership.findByName.server.controller'),
	require('./Membership/membership.create.server.controller'),
	require('./Membership/membership.remove.server.controller'),
	require('./Membership/membership.update.server.controller')

);
