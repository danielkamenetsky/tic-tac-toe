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