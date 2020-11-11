const express = require('express')
module.exports = (server) => {
    // Rotas da API
    const router = express.Router()
    server.use(router)
    router.get('/', (req, res, next) => res.status(200).json({message:"API funcionando /o/"}));
}
