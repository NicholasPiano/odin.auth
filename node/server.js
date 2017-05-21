
/*

The purpose of this file is to serve the authentication application. To do this, it has to achieve three functions:
1. Respond to a request to open and maintain a websocket.
2. Send javascript code through the connection to run the authentication application.
3. Check user credentials against a small database and store a uniquely generated token that represents the connection.

*/

// Start with:
// file:///Users/nicholaspiano/code/odin/odin.auth/node/test/index.html

const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 8080});

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
		console.log('received: %s', message);
	});

	setInterval(function () {
		ws.send('something');
	}, 1000);
});