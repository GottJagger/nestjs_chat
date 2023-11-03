import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';


@WebSocketGateway()
export class ChatGateway {
    @WebSocketServer()
    server: Server;
    // listen for send_message events
    @SubscribeMessage('send_message')
    listenForMessages(@MessageBody() message: string) {
        this.server.sockets.emit('receive_message', message);
    }
}