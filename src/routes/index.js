import express from 'express';
import cors from 'cors';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';
import editoras from './editorasRoutes.js';
import usuarios from './usuariosRoutes.js';

const corsOptions = {
    origin: 'http://localhost:4200',
    optionSuccessStatus: 200
};

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Curso de NodeJS'});
    });

    app.use(
        express.json(),
        cors(corsOptions),
        livros,
        autores,
        editoras,
        usuarios
    );
};

export default routes;