import Server from "./clases/server";
import  router  from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';



 const server = new Server();

 //BodyParser. Con esto decimos que lo que nos pasen lo postee como un objeto de javascript
 server.app.use(bodyParser.urlencoded({extended:true}) );
 server.app.use(bodyParser.json());


 server.app.use(cors({origin:true, credentials:true}));

 //Rutas de servicios
 server.app.use('/', router);

server.levantarServidor( ()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});