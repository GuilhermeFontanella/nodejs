import usuarios from '../models/Usuario.js';

class UsuariosController {
    static buscarUsuarios = async (req, res) => {
        try {
            const usuariosDoc = await usuarios.find();
            res.status(200).json(usuariosDoc);
        } catch (err) {
            console.log(err);
            res.status(500).json({error: 'Internal server error.'});
        }
    };

    static cadastraUsuario = async (req, res) => {
        const novoUsuario = new usuarios(req.body);
        try {
            await usuarios.create(novoUsuario);
            res.status(201).json({message: 'Usuário cadastrado com sucesso!'});
        } catch (err) {
            console.log(err);
            res.status(500).json({error: 'Internal server error.'});
        }
    };
}

export default UsuariosController;