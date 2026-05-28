let scoreboard = document.getElementsByClassName(".scoreboard")


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
    const allScoreboards = document.querySelectorAll(".points")
    
    for (let i = 0; i < allScoreboards.length; i++) {
        allScoreboards[i].textContent = 0        
    }
}
