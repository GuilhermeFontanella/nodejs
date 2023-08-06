import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        sobre_nome: {type: String, required: true},
        data_nascimento: {type: String, required: true},
        telefone: {type: String},
        email: {type: String, required: true},
        senha: {type: String, required: true}
    }
);

const usuarios = mongoose.model('usuarios', UsuarioSchema);

export default usuarios;