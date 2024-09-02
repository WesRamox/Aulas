const express = require('express')
const path = require('node:path')

const app = express()

let storedUsers = []

// configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// configuração do Body
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const title = 'Homepage'
  const message = 'Mensagem dinamica'


  res.render('index', { title, message })
})

app.get("/formulario", (req, res) => {
  res.render('form')
})

app.post("/register", (req, res) => {
  const username = req.body.username
  const password = req.body.password
  storedUsers.push({ username, password })

  res.redirect('/usuarios')
})

app.get("/usuarios", (req, res) => {
  res.render('users', { users: storedUsers })
})

const PORT = 3000
app.listen(PORT, () => console.log('Servidor iniciado'))