'use strict';

/**
 * rfq service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rfq.rfq');
