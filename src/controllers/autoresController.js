import mongoose from 'mongoose';
import { autores } from '../models/index.js';
import NotFound from '../errors/NotFound.js';

class AutoresController {

    static notFoundVerifier(dataDoc, response, message, next) {
        if (dataDoc !== null) response.send(201).json(dataDoc.toJSON());
        else next(new NotFound(message).sendResponse(response));
    }

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
            const autorDoc = await autores.findById(id);
            this.notFoundVerifier(autorDoc, res, 'Author not found.', next);
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
            const autorDoc = await autores.findByIdAndUpdate(id, atualizaAutor);
            this.notFoundVerifier(autorDoc, res, 'Author not found.', next);
        } catch (err) {
            next(err);
        }
    };

    static deletarAutor = async (req, res, next) => {
        const id = req.params.id;
        try {
            const autorDoc = await autores.findByIdAndRemove(id);
            this.notFoundVerifier(autorDoc, res, 'Author not found.', next);
        } catch (err) {
            next(err);
        }
    };
}

export default AutoresController;