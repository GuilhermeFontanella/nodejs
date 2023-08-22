import { editoras, livros } from '../models/index.js';

class LivroController {
    static buscarLivros = async (req, res, next) => {
        try {
            const livroDocs = await livros.find()
                .populate('autor')
                .populate('editora', 'nome_fantasia').exec();
            res.status(200).json(livroDocs);
        } catch (err) {
            console.error(err);
            next(err);
        }
    };

    static buscarLivrosById = async (req, res, next) => {
        const id = req.params.id;
        try {
            const livroDocs = await livros.findById(id);
            res.status(200).json(livroDocs);
        } catch (err) {
            next(err);
        }
    };

    // static buscarLivros = async (req, res, next) => {
    //     const { editora, titulo, autor  } = req.query;
    //     console.log(req.params)
    //     try {
    //         const livroDocs = await livros.find({
    //             titulo: titulo,
    //             editora: editora,
    //             autor: autor
    //         });
    //         res.status(200).json(livroDocs);
    //     } catch (err) {
    //         next(err);
    //     }
    // };

    static cadastrarLivro = async (req, res, next) => {
        const novoLivro = new livros(req.body);
        try {
            const livroDocs = await livros.create(novoLivro);
            res.status(201).send(livroDocs.toJSON());
        } catch (err) {
            next(err);
        }
    };

    static atualizarLivro = async (req, res, next) => {
        const id = req.params.id;
        const atualizaLivro = req.body;
        try {
            await livros.findByIdAndUpdate(id, atualizaLivro);
            res.status(200).send({message: 'Livro atualizado com sucesso.'});
        } catch (err) {
            next(err);
        }
    };

    static deletarLivro = async (req, res, next) => {
        const id = req.params.id;
        try {
            await livros.findByIdAndRemove(id);
            res.status(200).send({message: 'Livro removido com sucesso.'});
        } catch (err) {
            next(err);
        }
    };

    static buscarLivrosPorEditora = async (req, res, next) => {
        const editora = req.query.editora;
        try {
            const livroDocs = await livros.find({'editora': editora}, {});
            res.status(200).json(livroDocs);
        } catch (err) {
            next(err);
        }
    };

    static buscarLivrosPesquisaPersonalizada = async (req, res, next) => {
        const { editora, titulo, autor  } = req.query;
        const regex = new RegExp(titulo, 'i');
        const busca = {};

        if (titulo) busca.titulo = regex;
        if (autor) busca.autor = autor;

        try {
            if (editora) {
                const editorasDoc = await editoras.findOne({ nome_fantasia: editora});
                busca.editora = editorasDoc._id;
                const livroDocs = await livros.find({ editora: editorasDoc._id} );
                res.status(200).json(livroDocs);
            } else {
                const livroDocs = await livros.find(busca);
                res.status(200).json(livroDocs);
            }

            console.log(busca)
        } catch (err) {
            next(err);
        }
    };
}

export default LivroController;