import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
    .get('/livros', LivroController.buscarLivros)
    .get('/livros/busca', LivroController.buscarLivrosPesquisaPersonalizada)
    .get('/livros/:id', LivroController.buscarLivrosById)
    //.get('/livros/busca', LivroController.buscarLivros)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.deletarLivro);

export default router;