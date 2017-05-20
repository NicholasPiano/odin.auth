
var ws = new WebSocket('ws://localhost:8080');

ws.onmessage = function (event) {
	console.log(event.data);
}

ws.onopen = function (event) {
	setInterval(function () {
		ws.send("Here's some text that the server is urgently awaiting!");
	}, 1000);
};