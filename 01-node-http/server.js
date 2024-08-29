const http = require('node:http')

// server.js
const server = http.createServer((request, response) => {
  const path = request.url

  switch (path) {
    case '/':
      response.writeHead(200)
      response.write('Você está na página inicial!')
      break;
    case '/artigos':
      response.writeHead(200)
      response.write('Você está na página "artigos"!')
      break;
    default:
      response.writeHead(404)
      response.write('Caminho não encontrado!')
      break;
  }

  response.end()
})

const PORT = 5500

server.listen(PORT, () => {
  console.log(`Servidor rodandando localmente na porta http://localhost:${PORT}`)
})