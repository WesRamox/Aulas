const express = require('express')
const path = require('path')
const router = require('./routes')

const app = express()

// configuracao do ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// configuracao de arquivos estáticos
app.use(express.static('public'))

// configuracao para ler dados na requisicao
app.use(express.urlencoded({ extended: true }))

// configuracao de rotas da aplicacao
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
