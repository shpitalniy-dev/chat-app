export class Socket {
    constructor(wsPath) {
        if (Socket.instance) {
            return Socket.instance;
        }
        Socket.instance = new WebSocket(wsPath);
    }

    static getInstance() {
        return Socket.instance;
    }

    static closeConnection() {
        Socket.instance = null;
    }
}