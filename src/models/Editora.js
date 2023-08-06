import mongoose from 'mongoose';

const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        razao_social: {type: String, required: true},
        nome_fantasia: {type: String, required: true},
        cnpj: {type: String, required: true},
        endereco: {type: String},
        telefone: {type: String},
    }
);

const editoras = mongoose.model('editoras', editoraSchema);

export default editoras;