const mongoose = require('mongoose')
require('../models/User')
const User = mongoose.model('users')

class UserPointController {
  async update(req, res) {
    User.findOne({ _id: req.params.id })
      .then(user => {
        user.pontos += req.body.pontos

        user.save()
          .then(resp => {
            return res.status(200).json({
              message: "Pontos cadastrados com sucesso!",
              user
            })
          })

          .catch(error => {
            return res.status(400).json({ message: "Erro ao cadastrar missão!", error })

          })

          .catch(error => {
            return res.status(400).json({ message: "Usuário não encontrado!" })
          })
      })
  }
}

module.exports = new UserPointController();