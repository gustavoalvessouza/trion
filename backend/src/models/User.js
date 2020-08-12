const mongoose = require('../database')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    senha: {
        type: String,
        require: true,
    },
    sexo: {
        type: String,
        default: 'Masculino'
    },
    fraqueza: {
        type: String,
        default: 'Nenhuma'
    },
    habilidade: {
        type: String,
        default: 'Nenhuma'
    },
    missoesDiarias: {
        type: Array,
        default: []
    },
    missoesExtras: {
        type: Array,
        default: []
    },
    conquistas: {
        type: Array,
        default: []
    },
    nivel: {
        type: Number,
        default: 1
    },
    pontos: {
        type: Number,
        default: 1
    },
    accountType: {
        type: String,
        default: 'Aluno'
    },
});

module.export = mongoose.model('users', UserSchema);