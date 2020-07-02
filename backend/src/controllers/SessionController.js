const jwt = require('jsonwebtoken')
const User = mongoose.model('users');

const authConfig = require('../config/authConfig')

class SessionController {
    async store(req, res) {
        const { email } = req.body

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' })
        }

        const { _id: id, email } = user

        return res.json({
            user: {
                id,
                email
            },
            
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        })
    }
}

module.exports = new SessionController();