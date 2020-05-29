const mongoose = require('mongoose')
require('../models/User')
const User = mongoose.model('users')

class UserMissionController {
   async store(req, res) {
      User.findOne({ _id: req.params.id })
         .then(user => {
            user.missoesDiarias = req.body.mission,
            user.missoesExtras = req.body.mission

            user.save()
               .then(resp => {
                  return res.status(200).json({
                     message: "Missão definida com sucesso!",
                     user
                  })
               })
               .catch(error => {
                  return res.status(400).json({ error: "Erro ao cadastrar a missão!" })
               })
         })
         .catch(erro => {
            return res.status(400).json({ error: "Usuário não encontrado!" })
         })
   }
}

module.exports = new UserMissionController()

