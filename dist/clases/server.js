"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
//Con esto decimos que queremos todas las importanciones de este archivo
const socket = __importStar(require("../socket/sockets"));
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
        this.io.on('connection', (cliente) => {
            console.log('Cliente comectado');
            //Mensajes
            socket.mensaje(cliente);
            //Desconectar
            socket.desconectar(cliente);
        });
    }
    levantarServidor(callback) {
        // this.app.listen(this.port, callback());
        this.httpServer.listen(this.port, callback());
    }
}
exports.default = Server;
