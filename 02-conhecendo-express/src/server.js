const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.send('Servidor express funcionando!\n Você está na pagina inicial.')
})

server.get('/artigos', (req, res) => {
  res.send("Voce esta na pagina de artigos!")
})

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Servidor express rodando em http://localhost:${PORT}`)
})