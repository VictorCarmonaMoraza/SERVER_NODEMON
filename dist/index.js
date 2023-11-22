"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
//BodyParser. Con esto decimos que lo que nos pasen lo postee como un objeto de javascript
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
//Rutas de servicios
server.app.use('/', router_1.default);
server.levantarServidor(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
