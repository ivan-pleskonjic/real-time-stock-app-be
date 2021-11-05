const socketio  = require('socket.io');
const wsConf = {
  cors: {
    origins: ['http://localhost:3001', 'http://localhost:4200']
  }
};
const app       = require('express')();
const server    = require('http').createServer(app);
const io        = socketio(server, wsConf);

const { getMockedData } = require('./utils/mock');

io.on('connection', (socket) => {
    console.log('New WebSocket connection!');
    
    socket.on('disconnect', () => {
      console.log('WS connection ended');
    });
    
    socket.on('getData', (msg) => {
        io.emit('data', getMockedData());
    });    
  });


server.listen(3001, () => {
  console.log('Server listening on port: 3001');
});