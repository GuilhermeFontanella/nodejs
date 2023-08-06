import express from 'express';
import EditoraController from './../controllers/editoraController.js';

const router = express.Router();

router
    .get('/editoras', EditoraController.buscarEditoras)
    .get('/editoras/:id', EditoraController.buscarEditorasById)
    .post('/editoras', EditoraController.cadastrarEditora)
    .put('/editoras/:id', EditoraController.atualizarEditora)
    .delete('/editoras/:id', EditoraController.deletarEditora);

export default router;