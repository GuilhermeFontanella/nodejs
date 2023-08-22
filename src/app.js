import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorsHandlers.js';
import notFooundHandler from './middlewares/notFoundHandler.js';
import handler404 from './middlewares/handler404.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log('Conexão com banco de dados estabelecida.');
});

const app = express();
const port = process.env.PORT;


app.use(express.json());
routes(app);

app.use(handler404);

app.use(errorHandler);
app.use(notFooundHandler);

app.listen(port);

export default app;
