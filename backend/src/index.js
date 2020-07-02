const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const router = require(`./router`)
const cors = require('cors')

const PORT = process.env.PORT || 5555

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use(router)

server.listen(PORT, () => {
    console.log(`> Servidor rodando na porta: ${PORT}`)
})