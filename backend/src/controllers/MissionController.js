const mongoose = require('mongoose')
require('../models/Mission')
const Mission = mongoose.model('missions');

class MissionController {
    async index(req, res) {
        await Mission.find()
            .then(missions => {
                return res.json({ missions });
            })
            .catch(err => {
                return res.json({ error: 'Missões não encontradas' })
            })
    }

    async store(req, res) {
        const novaMissao = {
            titulo: req.body.titulo,
            materia: req.body.materia,
            eventos: req.body.eventos,
            tempo: req.body.tempo,
            tipo: req.body.tipo
        }

        await new Mission(novaMissao)
            .save()
            .then(mission => {
                return res.status(200).json({
                    message: "Missão cadastrada com sucesso!",
                    mission
                })
            })
            .catch(err => {
                return res.status(400).json({
                    error: "Erro ao cadastrar a missão",
                    errorType: error
                })
            })
    }

    async update(req, res) {
        await Mission.findOne({ _id: req.params.id })
            .then(mission => {
                mission.titulo = req.body.titulo
                mission.materia = req.body.materia
                mission.eventos = req.body.eventos
                mission.tempo = req.body.tempo
                mission.tipo = req.body.tipo

                mission.save()
                    .then(_ => {
                        return res.status(200).json({
                            message: "Missão editada com sucesso",
                            mission
                        })
                    })
                    .catch(erro => {
                        return res.status(400).json({
                            error: "Erro ao editar a missão",
                            errorMensage: err
                        })
                    })
            }).catch(erro => {
                return res.status(400).json({
                    error: "Missão não encontrada"
                })
            })
    }

    async delete(req, res) {
        await Mission.findOneAndDelete({ _id: req.params.id })
            .then(mission => {
                return res.status(200).json({
                    message: 'Missão deletada com sucesso'
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error: 'Missão inexistente ou não encontrada',
                    errorMessage: error
                })
            })
    }
}

module.exports = new MissionController();