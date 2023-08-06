import mongoose from 'mongoose';
import autores from './../models/Autor.js';

class AutoresController {
    static buscarAutores = async (req, res, next) => {
        try {
            const livroDocs = await autores.find();
            res.status(200).json(livroDocs);
        } catch (err) {
            console.error(err);
            next(err);
        }
    };

    static buscarAutorById = async (req, res, next) => {
        const id = req.params.id;
        try {
            const livroDocs = await autores.findById(id);
            if (!livroDocs) {
                const qtd = livroDocs;
                console.log(qtd);
                res.status(200).json({
                    data: [],
                    status: 200,
                    totalRegistros: 0
                });
            } else {
                res.status(200).json({
                    data: livroDocs,
                    status: 200
                });
            }
        } catch (err) {
            console.error(err);
            next(err);
        }
    };

    static cadastrarAutor = async (req, res, next) => {
        const novoAutor = new autores(req.body);
        try {
            const livroDocs = await autores.create(novoAutor);
            res.status(201).send(livroDocs.toJSON());
        } catch (err) {
            next(err);
        }
    };

    static atualizarAutor = async (req, res, next) => {
        const id = req.params.id;
        const atualizaAutor = req.body;
        try {
            await autores.findByIdAndUpdate(id, atualizaAutor);
            res.status(200).send({message: 'Autor atualizado com sucesso.'});
        } catch (err) {
            next(err);
        }
    };

    static deletarAutor = async (req, res, next) => {
        const id = req.params.id;
        try {
            await autores.findByIdAndRemove(id);
            res.status(200).send({message: 'Autor removido com sucesso.'});
        } catch (err) {
            next(err);
        }
    };
}

export default AutoresController;