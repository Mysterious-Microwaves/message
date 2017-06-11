const redis = require('redis');
const port = 8000;
const redisClient = redis.createClient(port);

redisClient.on('connect', () => {
  console.log('redis connected');
})

module.exports = redisClient;