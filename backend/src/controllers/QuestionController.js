const mongoose = require('mongoose')
require('../models/Question')
const Question = mongoose.model('questions');

class QuestionController {
    async index(req, res) {
        await Question.find()
            .then(questions => {
                return res.json({ questions });
            })
            .catch(err => {
                return res.json({ error: 'Perguntas não encontradas' })
            })
    }

    async store(req, res) {
        await new Question(req.body)
            .save()
            .then(question => {
                return res.status(200).json({
                    message: "Pergunta cadastrada com sucesso!",
                    question: req.body
                })
            })
            .catch(err => {
                return res.status(400).json({
                    error: "Erro ao cadastrar a pergunta",
                    errorType: err
                })
            })
    }
}

module.exports = new QuestionController();