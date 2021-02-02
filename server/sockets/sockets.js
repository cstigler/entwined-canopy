const config = require('../config/config');
const io = require('socket.io')(null, {
  cors: {
    origin: process.env.NODE_ENV === 'production' ? config.staticSiteURLProd : config.staticSiteURLDev,
    methods: ['GET', 'POST'],
    credentials: true
  }
});
const socketAPI = {
  io,
};

require('./user-sockets')(io);
require('./lx-sockets')(io);

module.exports = socketAPI;
