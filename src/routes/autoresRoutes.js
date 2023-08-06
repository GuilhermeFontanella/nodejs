import express from 'express';
import AutoresController from './../controllers/autoresController.js';

const router = express.Router();

router
    .get('/autores', AutoresController.buscarAutores)
    .get('/autores/:id', AutoresController.buscarAutorById)
    .post('/autores', AutoresController.cadastrarAutor)
    .put('/autores/:id', AutoresController.atualizarAutor)
    .delete('/autores/:id', AutoresController.deletarAutor);

export default router;