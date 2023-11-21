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
    res.json({
        ok: true,
        mensaje: 'Todo esta bien en POST!!'
    });
});
exports.default = router;
