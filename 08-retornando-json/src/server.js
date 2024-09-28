const express = require('express')
const router = require('./router')

const app = express()

app.use(express.json())

// Use o roteador para todas as rotas definidas
app.use(router)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`))