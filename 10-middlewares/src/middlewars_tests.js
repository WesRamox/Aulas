const express = require('express');
const middlewareC = require('./middlewares/middleware-c');

const app = express();

app.use(function(req, res, next) {
  console.log("Executando middleware A")
  req.middlewareA = 'OK!'
  next()
})

function middlewareB(req, res, next) {
  console.log("Executando middleware B")
  req.middlewareB = 'OK!'
  next()
}

app.get('/testeA', (req, res) => {
  console.log({ a: req.middlewareA, b: req.middlewareB })
  throw new Error('Algo deu muito errado')
  res.end()
})

app.get('/testeB', middlewareB, middlewareC, (req, res) => {
  console.log({ a: req.middlewareA, b: req.middlewareB, c: req.middlewareC })
  res.end()
})

app.use(function( err, req, res, next) {
  if(err) {
    console.log(err.message)
    res.status(400)
    res.json({ message: err.message })
  } else {
    next()
  }
})

const PORT = 3000
app.listen(PORT, () => console.log("Server is running on port " + PORT));