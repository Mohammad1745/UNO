const express = require('express')
const route = express.Router()
const gameController = require('./game_controller')

//game
route.post('/join', gameController.join)
route.post('/create', gameController.create)
route.get('/player-list', gameController.playerList)

module.exports = route