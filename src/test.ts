import WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open', function open() {
    ws.send('connect|ProbablePrime');
});

ws.on('message', function incoming(data) {
    console.log(data);
});
