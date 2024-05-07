// Define a list of Odia letters
const odiaLetters = ['ଅ', 'ଆ', 'ଇ', 'ଈ', 'ଉ', 'ଊ', 'ଋ', 'ଏ', 'ଐ', 'ଓ', 'ଔ', 'କ', 'ଖ', 'ଗ', 'ଘ', 'ଙ', 'ଚ', 'ଛ', 'ଜ', 'ଝ', 'ଞ', 'ଟ', 'ଠ', 'ଡ', 'ଢ', 'ଣ', 'ତ', 'ଥ', 'ଦ', 'ଧ', 'ନ', 'ପ', 'ଫ', 'ବ', 'ଭ', 'ମ', 'ଯ', 'ୟ', 'ର', 'ଲ', 'ଳ', 'ଵ', 'ଶ', 'ଷ', 'ସ', 'ହ'];

// Function to generate a random Odia letter
function getRandomLetter() {
    return odiaLetters[Math.floor(Math.random() * odiaLetters.length)];
}

// Function to initialize the game board
function initializeGameBoard() {
    const gameBoard = document.getElementById('game-board');
    for (let i = 0; i < 9; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.innerText = getRandomLetter();
        gameBoard.appendChild(box);
    }
}

// Call initializeGameBoard when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeGameBoard);
