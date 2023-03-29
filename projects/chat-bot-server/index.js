const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

const port = process.env.PORT || 3000;

io.on('connect', (socket) => {
  socket.on('user_uttered', ({message}) => {
    io.emit('bot_uttered', `Thanks for your query about ${message}. I will process and get back to you!!!`);
  });

  socket.on('disconnect', () => {
    console.log('disconnected!');
  });
});

httpServer.listen(port, () => console.log(`listening on port ${port}`));