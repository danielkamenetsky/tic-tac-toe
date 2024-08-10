// Define required variables to track the state of the game
let board
let turn
let winner
let tie
// Cached element references
const squareEls = document.querySelectorAll(".square")
console.dir(squareEls)
const messageEl = document.querySelector(".message")
console.dir(messageEl)
const winningCombos = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
]
init()
render()
function init() {
    board = [null, null, null, 1, null, null, -1, null, null]
    turn = 1
    winner = false
    tie = false
    console.log("Game initialized:", { board, turn, winner, tie })
}
function render() {
    updateBoard()
    messageEl.textContent = updateMessage(winner, tie, turn)
}
function updateBoard() {
    board.forEach((value, index) => {
        console.log(value, index)
        const squareEl = squareEls[index]
        if (value === 1) {
            squareEl.textContent = 'X';
        } else if (value === -1) {
            squareEl.textContent = 'O'
        } else {
            squareEl.textContent = ''
        }
    });
}
function updateMessage(winner, tie, turn) {
    return !winner && !tie ? `It's ${turn}'s turn` :
        !winner && tie ? `It's a tie` :
            `Congratulations to ${winner}!`
}
// Handle a player clicking a square
// Attach an event listener to the game board (to each of the squareEls with forEach)
function handleClick(evt) {
    const index = evt.target.id
    const sqIdx = parseInt(index.replace('square', ''), 10)
    console.log(`You clicked square with index ${sqIdx}`)
    if (board[sqIdx] !== null) return
    board[sqIdx] = turn
    turn *= -1
    render()
}
squareEls.forEach(square => {
    square.addEventListener('click', handleClick)
})
// Obtain the index of the square that was clicked by extracting the index from an id assigned to the target element in the HTML
