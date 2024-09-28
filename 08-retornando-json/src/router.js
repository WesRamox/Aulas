const express = require('express')
const gamesController = require('./controllers/games-controller')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' })
})

router.get('/games', gamesController.index)
router.get('/games/:id', gamesController.show)

router.post('/games', gamesController.save)
router.post('/games/:id/genres', gamesController.addGenre)

router.post('/games/:id', gamesController.deleteGame)

module.exports = router