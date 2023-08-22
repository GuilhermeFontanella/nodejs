/* eslint-disable no-undef */
import { editoras } from '../models/index.js';

class EditoraController {
    static buscarEditoras = async (req, res) => {
        try {
            const editoraDocs = await editoras.find();
            res.status(200).json(editoraDocs);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static buscarEditorasById = async (req, res) => {
        const id = req.params.id;
        try {
            const editoraDocs = await editoras.findById(id);
            res.status(200).json(editoraDocs);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static cadastrarEditora = async (req, res) => {
        const novoEditora = new editoras(req.body);
        try {
            const editoraDocs = await editoras.create(novoEditora);
            res.status(201).send(editoraDocs.toJSON());
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Internal server error'});
        }
    };

    static atualizarEditora = async (req, res) => {
        const id = req.params.id;
        const atualizaEditora = req.body;
        try {
            await   livros.findByIdAndUpdate(id, atualizaEditora);
            res.status(200).send({message: 'Editora atualizada com sucesso.'});
        } catch (err) {
            res.status(500).json({error: `${err}`});
        }
    };

    static deletarEditora = async (req, res) => {
        const id = req.params.id;
        try {
            await editoras.findByIdAndRemove(id);
            res.status(200).send({message: 'Editora removida com sucesso.'});
        } catch (err) {
            res.status(500).json({error: `${err}`});
        }
    };
}

export default EditoraController;