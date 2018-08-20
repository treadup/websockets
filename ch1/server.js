
var WebSocketServer = require('ws').Server;
var wws = new WebSocketServer({port: 8181});

wws.on('connection', function(ws) {
  console.log('client connected');
  ws.on('message', function(message) {
    console.log(message);
  });
});
