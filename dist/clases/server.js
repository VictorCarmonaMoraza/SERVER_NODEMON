"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = environment_1.SERVER_PORT;
        //io necesita la configuracion de servidor corriendo en estos momentos
        this.httpServer = new http_1.default.Server(this.app);
        this.io = new socket_io_1.default.Server(this.httpServer, { cors: { origin: true, credentials: true } });
        //Escuchamos los socket
        this.escucharSockets();
    }
    escucharSockets() {
        console.log('Escuchando socket');
        //Cuando iun cliente se conecta
        //on es para escuchar eventos
        this.io.on('connection', cliente => {
            console.log('Cliente comectado');
        });
    }
    levantarServidor(callback) {
        // this.app.listen(this.port, callback());
        this.httpServer.listen(this.port, callback());
    }
}
exports.default = Server;
