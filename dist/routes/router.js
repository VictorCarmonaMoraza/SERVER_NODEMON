"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//El router es para crear nuestros servicios REST
const router = (0, express_1.Router)();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien en GET!!'
    });
});
router.post('/mensajes', (req, res) => {
    //Nos traemos la informacion
    const cuerpoDePostman = req.body.cuerpo;
    const deDePostman = req.body.de;
    res.json({
        ok: true,
        cuerpo: cuerpoDePostman,
        de: deDePostman
    });
});
//Leer url
router.post('/mensajes/:id', (req, res) => {
    //Nos traemos la informacion
    const cuerpoDePostman = req.body.cuerpo;
    const deDePostman = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        cuerpo: cuerpoDePostman,
        de: deDePostman,
        id: id
    });
});
exports.default = router;
