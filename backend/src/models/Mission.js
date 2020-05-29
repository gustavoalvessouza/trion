const mongoose = require('../database')
const Schema = mongoose.Schema

const MissionSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    materia: {
        type: String,
        required: true
    },
    eventos: {
        type: String,
        required: true
    },
    tempo: {
        type: Number,
        required: true
    },
    tipo: {
        type: String
    },

});

module.exports = mongoose.model('missions', MissionSchema)