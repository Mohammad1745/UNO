let joinGameOptions = {
    createGame: 1,
    joinGame: 2
}
let joinGameOption = joinGameOptions.createGame
let socket

let audio = {
    newMessage : new Audio("./public/assets/sounds/new-message.mp3"),
    cardFlick : new Audio("./public/assets/sounds/card-flick.mp3"),
    cardDeckShuffle : new Audio("./public/assets/sounds/card-deck-shuffle.mp3"),
    gameCompleted : new Audio("./public/assets/sounds/game-completed.mp3")
}

document.addEventListener("DOMContentLoaded", async () => {
    handleSocketConnection()
    joinGameMenuHandler()
    joinGameButtonHandler()
    quitGameButtonHandler()
    if(localStorage.getItem('gameId'))
        await startGamePopUp()
    if(localStorage.getItem('gameStarted')) {
        game()
        chat()
    }
})

function handleSocketConnection() {
    socket = io("http://127.0.0.1:5000")
    socket.on('connect', () => {
        console.log('connected')
    })
    socket.on('player-joining', async payload => {
        let gameId = localStorage.getItem('gameId')
        if (gameId && payload.gameId === gameId) {
            audio.cardFlick.play()
            await helper.sleep(1000)
            await startGamePopUp()
        }
    })
    socket.on('start-game', async payload => {
        let gameId = localStorage.getItem('gameId')
        let chatContent = localStorage.getItem('chat')
        if (gameId && payload.gameId === gameId) {
            audio.cardDeckShuffle.play()
            for (let i=1; i<=4; i++)
                localStorage.removeItem(`player${i}_position`)
            await helper.sleep(1000)
            game()
            if(!chatContent) chat()
        }
    })
    socket.on('player-quiting', async payload => {
        let gameId = localStorage.getItem('gameId')
        if (gameId && payload.gameId === gameId)
            location.reload()
    })
}

function joinGameMenuHandler() {
    const joinMenuButton = document.querySelector('#join_menu_button')
    const createMenuButton = document.querySelector('#create_menu_button')

    joinMenuButton.addEventListener('click', () => {
        joinGameOption = joinGameOptions.joinGame
        document.getElementById('game_id').style.display = "flex";
        document.getElementById("create_option").style.display = "none";
        document.getElementById("join_option").style.display = "flex";
        document.getElementById('join_button').innerHTML = "Join Game"
    })
    createMenuButton.addEventListener('click', () => {
        joinGameOption = joinGameOptions.createGame
        document.getElementById('game_id').style.display = "none";
        document.getElementById("create_option").style.display = "flex";
        document.getElementById("join_option").style.display = "none";
        document.getElementById('join_button').innerHTML = "Create Game"
    })
}

function joinGameButtonHandler() {
    const joinButton = document.getElementById('join_button')

    joinButton.addEventListener('click', async () => {
        const username = document.getElementById('username').value
        let gameId = document.getElementById('game_id').value

        if(localStorage.getItem('gameId')){
            helper.alertMessage("error", "Already has a game")
            await startGamePopUp()
        } else {
            if (joinGameOption===joinGameOptions.joinGame)
                joinGame({username, gameId})
            else
                createGame({username})
        }
    })
}

function joinGame ({username, gameId}) {
    $.ajax({
        url: helper.DOMAIN + "/api/game/join",
        method: "POST",
        data: {username, gameId}
    }).done(async response => {
        response.success ?
            await handleJoinGameRequestSuccess(response) :
            handleJoinGameRequestError(response)
    }).fail(err => {
        console.log(err)
    })
}

function createGame ({username}) {
    $.ajax({
        url: helper.DOMAIN + "/api/game/create",
        method: "POST",
        data: {username}
    }).done(async response => {
        response.success ?
            await handleCreateGameRequestSuccess(response) :
            handleJoinGameRequestError(response)
    }).fail(err => {
        console.log(err)
    })
}

async function handleJoinGameRequestSuccess(response) {
    let {gameId, username, userId} = response.data
    localStorage.setItem('gameId', gameId)
    localStorage.setItem('userId', userId)
    localStorage.setItem('username',  username)
    helper.alertMessage("success", response.message)
    await helper.sleep(500)
    socket.emit('player-joining', {gameId})
}

async function handleCreateGameRequestSuccess(response) {
    let {gameId, username, userId} = response.data
    localStorage.setItem('gameId', gameId)
    localStorage.setItem('userId', userId)
    localStorage.setItem('username',  username)
    helper.alertMessage("success", response.message)
    await startGamePopUp()
}

function handleJoinGameRequestError(response) {
    helper.alertMessage("error", response.message)
}

async function startGamePopUp() {
    let gameId = localStorage.getItem('gameId')
    let username = localStorage.getItem('username')
    const startGamePopUp = document.getElementById('game_login')
    startGamePopUp.innerHTML = ''

    startGamePopUp.insertAdjacentHTML('beforeend', `
        <div id="popup_game_id" class="popup-game-id"> Game ID: ${gameId}</div>
        <hr>
        <ul id="player_list" class="players-list">

        </ul>
        <button type="button" id="start_game_button" class="start-game-button">Start Game</button>
    `)
    startGamePopUp.style.padding = "10px"
    document.getElementById('popup_game_id').style.color = 'black'
    await helper.sleep(1000)
    showPlayerList(gameId)
    handleStartGameButton()
}

function showPlayerList (gameId) {
    $.ajax({
        url: helper.DOMAIN + "/api/game/player-list",
        method: "GET",
        data: {gameId}
    }).done(response => {
        response.success ?
            handlePlayerListRequestSuccess(response) :
            handlePlayerListRequestError(response)
    }).fail(err => {
        console.log(err)
    })
}

function handlePlayerListRequestSuccess(response) {
    let playerList = response.data
    let playerListDom = document.getElementById('player_list')
    playerListDom.innerHTML = ''
    localStorage.setItem('playerCount', Object.keys(playerList).length)
    Object.keys(playerList).map(key => {
        localStorage.setItem(key, playerList[key].username)
        playerListDom.insertAdjacentHTML('beforeend', `<li class="game-player-list"><img class="players-avatar" src="./public/assets/images/icons/${[key]}.png"> ${playerList[key].username}</li>`)
    })
}

function handlePlayerListRequestError(response) {
    helper.alertMessage("error", response.message)
    localStorage.clear()
    location.reload()
}

function handleStartGameButton() {
    const startButton = document.getElementById('start_game_button')

    startButton.addEventListener('click', async () => {
        const playerCount = localStorage.getItem('playerCount')
        if(!playerCount || playerCount<2){
            helper.alertMessage("error", "Multiple Players Required")
        } else {
            let gameId = localStorage.getItem('gameId')
            socket.emit('start-game', {gameId})
            startGame(gameId)
        }
    })
}


function startGame(gameId) {
    $.ajax({
        url: helper.DOMAIN + "/api/game/start-game",
        method: "GET",
        data: {gameId}
    }).done( response => {
        response.success ?
            handleStartGameRequestSuccess(response) :
            handleStartGameRequestError(response)
    }).fail(err => {
        console.log(err)
    })
}
 function handleStartGameRequestSuccess(response) {
     localStorage.setItem('gameStarted', 'true')
}

function handleStartGameRequestError(response) {
    if(response.data.gameStarted)
        localStorage.setItem('gameStarted', 'true')
    helper.alertMessage("error", response.message)
}

function quitGameButtonHandler() {
    const quitButton = document.getElementById('quit_btn')

    quitButton.addEventListener('click', async () => {
        let gameId = localStorage.getItem('gameId')
        const userId = localStorage.getItem('userId')
        const username = localStorage.getItem('username')
        socket.emit('player-quiting', {gameId})
        quitGame({userId, gameId, username})
    })
}

function quitGame ({userId, username, gameId}) {
    $.ajax({
        url: helper.DOMAIN + "/api/game/quit",
        method: "GET",
        data: {userId, gameId, username}
    }).done(response => {
        response.success ?
            handleQuitGameRequestSuccess(response) :
            handleQuitGameRequestError(response)
    }).fail(err => {
        console.log(err)
    })
}


function handleQuitGameRequestSuccess(response) {
}

function handleQuitGameRequestError(response) {
    helper.alertMessage("error", response.message)
}
