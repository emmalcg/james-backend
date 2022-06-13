'use strict';

/**
 * mugshot service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mugshot.mugshot');
