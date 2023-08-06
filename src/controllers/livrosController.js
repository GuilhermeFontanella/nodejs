import livros from '../models/Livro.js';

class LivroController {
    static buscarLivros = async (req, res) => {
        try {
            const livroDocs = await livros.find()
                .populate('autor')
                .populate('editora', 'nome_fantasia').exec();
            res.status(200).json(livroDocs);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static buscarLivrosById = async (req, res) => {
        const id = req.params.id;
        try {
            const livroDocs = await livros.findById(id);
            res.status(200).json(livroDocs);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static cadastrarLivro = async (req, res) => {
        const novoLivro = new livros(req.body);
        try {
            const livroDocs = await livros.create(novoLivro);
            res.status(201).send(livroDocs.toJSON());
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static atualizarLivro = async (req, res) => {
        const id = req.params.id;
        const atualizaLivro = req.body;
        try {
            await livros.findByIdAndUpdate(id, atualizaLivro);
            res.status(200).send({message: 'Livro atualizado com sucesso.'});
        } catch (err) {
            res.status(500).json({error: `${err}`});
        }
    };

    static deletarLivro = async (req, res) => {
        const id = req.params.id;
        try {
            await livros.findByIdAndRemove(id);
            res.status(200).send({message: 'Livro removido com sucesso.'});
        } catch (err) {
            res.status(500).json({error: `${err}`});
        }
    };

    static buscarLivrosPorEditora = async (req, res) => {
        const editora = req.query.editora;
        try {
            const livroDocs = await livros.find({'editora': editora}, {});
            res.status(200).json(livroDocs);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static buscarLivrosPesquisaPersonalizada = async (req, res) => {
        let query = req.query.titulo;
        
        try {
            const livroDocs = await livros.find({'titulo': query}, {});
            res.status(200).json(livroDocs);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };
}

export default LivroController;