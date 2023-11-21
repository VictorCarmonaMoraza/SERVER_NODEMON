 import {Router, Request, Response} from 'express';


 //El router es para crear nuestros servicios REST
const router = Router();


 router.get('/mensajes', (req:Request, res:Response)=>{

    res.json({
        ok: true,
        mensaje: 'Todo esta bien en GET!!'
    });


 });

 router.post('/mensajes', (req:Request, res:Response)=>{

    res.json({
        ok: true,
        mensaje: 'Todo esta bien en POST!!'
    });


 });

 export default router;