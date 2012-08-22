var config = {};

config.redis = {};

config.port = process.env.NODE_PORT || 4000;

config.redis.port = process.env.REDIS_PORT || 6379;
config.redis.host = process.env.REDIS_HOST || '127.0.0.1';
config.redis.password = process.env.REDIS_PASSWORD || '';

module.exports = config;
