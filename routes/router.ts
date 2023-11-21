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

    //Nos traemos la informacion
    const cuerpoDePostman = req.body.cuerpo;
    const deDePostman = req.body.de;


    res.json({
        ok: true,
        cuerpo: cuerpoDePostman,
        de:deDePostman
    });
 });

 //Leer url
 router.post('/mensajes/:id', (req:Request, res:Response)=>{

    //Nos traemos la informacion
    const cuerpoDePostman = req.body.cuerpo;
    const deDePostman = req.body.de;
    const id = req.params.id;


    res.json({
        ok: true,
        cuerpo: cuerpoDePostman,
        de:deDePostman,
        id:id
    });
 });

 export default router;