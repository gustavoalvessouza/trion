const mongoose = require('mongoose')
const User = mongoose.model('users')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/authConfig')

class SessionController {
    async store(req, res) {
        const { email } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' })
        }

        const { _id } = user

        return res.json({
            user,
            token: jwt.sign({ _id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        })
    }
}

module.exports = new SessionController();