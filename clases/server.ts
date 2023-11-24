import express from 'express'
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';

//Con esto decimos que queremos todas las importanciones de este archivo
import * as socket from '../socket/sockets';

export default class Server{


    public app:express.Application;
    public port:number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;

        //io necesita la configuracion de servidor corriendo en estos momentos
        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server(this.httpServer, {cors:{origin:true, credentials:true}});

        //Escuchamos los socket
        this.escucharSockets();
    }

    private escucharSockets(){

        console.log('Escuchando socket');

        //Cuando iun cliente se conecta
        //on es para escuchar eventos
        this.io.on('connection',(cliente)=>{
            console.log('Cliente comectado');

            //Mensajes
            socket.mensaje(cliente);


            //Desconectar
            socket.desconectar(cliente);
        });
    }

    levantarServidor(callback:Function){
        // this.app.listen(this.port, callback());
        this.httpServer.listen(this.port, callback());
    }

}