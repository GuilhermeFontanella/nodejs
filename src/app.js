import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import mongoose from 'mongoose';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log('Conexão com banco de dados estabelecida.');
});

const app = express();
app.use(express.json());
routes(app);

app.use((erro, req, res, next) => {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).json({
            error: 'Os dados inseridos estão incorretos.',
            status: 400
        });
    } else {
        res.status(500).json({
            error: 'Internal server error',
            status: 500
        });
    }
    //res.status(500).send({message: "Internal Server Error"});
});

export default app;
