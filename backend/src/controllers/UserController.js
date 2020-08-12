const mongoose = require('mongoose')
require('../models/User')
const User = mongoose.model('users');

class UserController {
    async index(req, res) {
        await User.findOne({ _id: req.params.id })
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(400).json({ erro: "Usuário não encontrado" })
            })
    }

    async store(req, res) {
        const novoUsuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            sexo: req.body.sexo
        }

        await new User(novoUsuario)
            .save()
            .then(user => {
                return res.status(200).json({
                    message: 'Usuário criado com sucesso!',
                    user: novoUsuario
                })
            }).catch(error => {
                return res.status(400).json({
                    message: 'Erro ao cadastrar o usuário!',
                    errorMessage: error
                })
            })
    }
}

module.exports = new UserController();