import autores from './../models/Autor.js';

class AutoresController {
    static buscarAutores = async (req, res) => {
        try {
            const livroDocs = await autores.find();
            res.status(200).json(livroDocs);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static buscarAutorById = async (req, res) => {
        const id = req.params.id;
        try {
            const livroDocs = await autores.findById(id);
            res.status(200).json(livroDocs);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static cadastrarAutor = async (req, res) => {
        const novoAutor = new autores(req.body);
        try {
            const livroDocs = await autores.create(novoAutor);
            res.status(201).send(livroDocs.toJSON());
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static atualizarAutor = async (req, res) => {
        const id = req.params.id;
        const atualizaAutor = req.body;
        try {
            await autores.findByIdAndUpdate(id, atualizaAutor);
            res.status(200).send({message: 'Autor atualizado com sucesso.'});
        } catch (err) {
            res.status(500).json({error: `${err}`});
        }
    };

    static deletarAutor = async (req, res) => {
        const id = req.params.id;
        try {
            await autores.findByIdAndRemove(id);
            res.status(200).send({message: 'Autor removido com sucesso.'});
        } catch (err) {
            res.status(500).json({error: `${err}`});
        }
    };
}

export default AutoresController;