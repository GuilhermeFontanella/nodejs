import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {
            type: String, 
            required: [true, "The book's title is required."]
        },
        autor: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'autores', 
            required: [true, "The author's name is required."]
        },
        editora: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'editoras', 
            required: [true, "The editor's name is required."]
        },
        paginas: {
            type: Number,
            validate: {
                validator: (value) => {
                    return value >= 10 && value <= 5000;
                },
                message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
            }
        },
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;