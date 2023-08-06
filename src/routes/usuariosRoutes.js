import express from 'express';
import UsuariosController from '../controllers/usuariosController.js';

const router = express.Router();

router
    .get('/usuarios', UsuariosController.buscarUsuarios)
    .post('/usuarios', UsuariosController.cadastraUsuario);

export default router;