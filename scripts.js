const words = ["example", "word", "puzzle", "crossword", "game"];
let selectedCells = [];

function generateRandomLetters() {
    let randomLetters = [];
    for (let i = 0; i < 25; i++) {
        let randomWord = words[Math.floor(Math.random() * words.length)];
        let randomLetter = randomWord.charAt(Math.floor(Math.random() * randomWord.length));
        randomLetters.push(randomLetter);
    }
    return randomLetters;
}

function populatePuzzle() {
    let puzzleTable = document.getElementById("puzzle");
    let letters = generateRandomLetters();
    let cellIndex = 0;
    for (let i = 0; i < 5; i++) {
        let row = puzzleTable.insertRow(i);
        for (let j = 0; j < 5; j++) {
            let cell = row.insertCell(j);
            cell.textContent = letters[cellIndex++];
            cell.addEventListener("click", function() {
                toggleCell(cell);
            });
        }
    }
}

function toggleCell(cell) {
    if (cell.classList.contains("selected")) {
        cell.classList.remove("selected");
    } else {
        cell.classList.add("selected");
        selectedCells.push(cell);
    }
}

function validateWord() {
    let selectedWord = selectedCells.map(cell => cell.textContent).join("");
    if (words.includes(selectedWord)) {
        selectedCells.forEach(cell => cell.classList.add("correct"));
        document.getElementById("result-label").textContent = "ଚମତ୍କାର";
    } else {
        selectedCells.forEach(cell => cell.classList.add("wrong"));
    }
}

function refreshTable() {
    let puzzleTable = document.getElementById("puzzle");
    puzzleTable.innerHTML = "";
    selectedCells = [];
    populatePuzzle();
}

function startTimer() {
    let timeLeft = 45;
    let timerElement = document.getElementById("timer");
    let timerInterval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 10) {
            timerElement.style.color = "red";
            timerElement.style.animation = "blinking 1s infinite";
        }
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

document.getElementById("ok-btn").addEventListener("click", function() {
    validateWord();
});

document.getElementById("refresh-btn").addEventListener("click", function() {
    refreshTable();
});

populatePuzzle();
startTimer();
