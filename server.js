const http = require('http');
const WebSocket = require('ws');

const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  console.log('Client connected');
  
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('Hello, welcome to the chat!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
