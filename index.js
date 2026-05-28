let matches = document.getElementById("matchesText")

function plusOne(botao) {
    const scoreboard = botao.closest(".scoreboard")

    const points = scoreboard.querySelector(".points")

    points.textContent = Number(points.textContent) + 1
}

function plusTwo(botao) {
    const scoreboard = botao.closest(".scoreboard")

    const points = scoreboard.querySelector(".points")

    points.textContent = Number(points.textContent) + 2
}

function plusThree(botao) {
    const scoreboard = botao.closest(".scoreboard")

    const points = scoreboard.querySelector(".points")

    points.textContent = Number(points.textContent) + 3
}

function newGame() {
    location.reload()
}

function saveMatch() {
    const scoreboards =  document.querySelectorAll(".points")

    const home = scoreboards[0].textContent
    const guest = scoreboards[1].textContent

    const result = "Home: " + home + " X " + "Guest: " + guest

    matches.textContent += result

    for (let i = 0; i < scoreboards.length; i++) {
        scoreboards[i].textContent = 0
    }
}