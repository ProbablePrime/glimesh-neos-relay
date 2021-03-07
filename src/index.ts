import { GlimeshChat } from 'glimesh-chat';
import config = require('config');

import WebSocket = require('ws');

const srv = new WebSocket.Server({
    port: config.get('port') || 8080,
});

srv.on('connection', (ws) => {
    console.log('Connection Received');
    const connected = false;
    const chat = new GlimeshChat({ clientId: config.get('clientId') });
    ws.on('message', (buf) => {
        const msg = buf.toString();
        console.log('<N' + msg);
        const msgArray = msg.split('|');
        const command = msgArray[0];
        switch (command) {
            case 'connect':
                if (connected) {
                    break;
                }
                chat.connect(msgArray[1]).then(() => {
                    chat.on('message', (msg: any) => {
                        console.log('>N' + msg);
                        ws.send(convertMsg(msg));
                    });
                });
                break;
            case 'msg':
                console.log('>G' + msg);
                chat.sendMessage(msgArray[1]);
                break;
        }
    });
});

function convertMsg(msg: any): string {
    return msg.user.username + '|' + msg.message;
}
