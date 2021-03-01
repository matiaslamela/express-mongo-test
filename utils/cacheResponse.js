const { cache } = require('@hapi/joi');
const { config } = require('../config/index');

function cacheResponse(res, seconds) {
  if (!config.dev) {
    res.set('Cache-Control', `public, max-age${seconds}`);
  }
}

module.exports = cacheResponse;
