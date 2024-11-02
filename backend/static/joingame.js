
let round = 1;
let lives = 3;
let history = [];
let hints = [];
let score = 0.0;
let incorrect = 0;
let json_codes = {};
let timeRemaining = 250;
let gameId = '';
let playerName = '';
const correctAudio = new Audio('https://sortira.github.io/whereami/correct.mp3');
const wrongAudio = new Audio('https://sortira.github.io/whereami/wrong.mp3');
const gameOverAudio = new Audio('https://sortira.github.io/whereami/gameover.mp3');

//high means hints with a high risk, and similar.
let high = 0, low = 0, medium = 0;

/**
 * Gets a user-friendly hint based on the provided key.
 * 
 * @param {string} hint - The key to retrieve a hint for.
 * @returns {string} The user-friendly hint.
 */
const getPrettyHint = (hint) => {
    switch (hint) {
        case 'iso_codetwo': json_codes[hint] = 'alpha2Code'; return 'ISO 3166-1 alpha-2 code';
        case 'iso_codethree': json_codes[hint] = 'alpha3Code'; return 'ISO 3166-1 alpha-3 code';
        case 'timezone': json_codes[hint] = 'timezones'; return 'Timezone';
        case 'borders': json_codes[hint] = 'borders'; return 'Border Nations (2 codes)';
        case 'area': json_codes[hint] = 'area'; return 'Geographical Area';
        case 'capital': json_codes[hint] = 'capital'; return 'Capital City';
        case 'cioc': json_codes[hint] = 'cioc'; return 'International Olympic Committee Code';
        case 'numcode': json_codes[hint] = 'numericCode'; return 'Numeric Code';
        case 'region': json_codes[hint] = 'region'; return 'Region';
        case 'flag': json_codes[hint] = 'flag'; return 'Flag Image: ';
        default: return '';
    }
};

/**
 * Sets JSON codes based on selected hints and categorizes them into risk levels.
 */
const setJsonCodes = () => {
    hints.forEach(hint => {
        switch (hint) {
            case 'iso_codetwo': json_codes[hint] = 'alpha2Code'; low += 1; break;
            case 'iso_codethree': json_codes[hint] = 'alpha3Code'; low += 1; break;
            case 'timezone': json_codes[hint] = 'timezones'; low += 1; break;
            case 'borders': json_codes[hint] = 'borders'; medium += 1; break;
            case 'area': json_codes[hint] = 'area'; medium += 1; break;
            case 'flag': json_codes[hint] = 'flag'; medium += 1; break;
            case 'capital': json_codes[hint] = 'capital'; medium += 1; break;
            case 'cioc': high += 1; json_codes[hint] = 'cioc'; high += 1; break;
            case 'numcode': json_codes[hint] = 'numericCode'; high += 1; break;
            case 'region': json_codes[hint] = 'region'; high += 1; break;
            default: console.log("[LOG] Unrecognised hint.")
        }
    });
};

/**
 * Gets the selected checkboxes and validates the count.
 * 
 * @returns {Array} An array of selected checkbox values or an empty array if invalid.
 */
const getSelectedCheckboxes = () => {
    const selectedValues = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedValues.push(checkbox.value);
    });

    const errorMessageElement = document.getElementById('error-message');
    if (selectedValues.length != 5) {
        errorMessageElement.textContent = "You HAVE to select 5 hints.";
        errorMessageElement.style.display = "block";
        return [];
    } else {
        errorMessageElement.style.display = "none";
    }

    return selectedValues;
};

/**
 * Ends the game, displaying the score and history.
 */
const endGame = async () => {
    const playerData = { gameId: gameId, playerName: playerName, score: score };
    try {
        const response = await fetch('/sendplayerdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playerData)
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();
        console.log('Player data sent successfully:', result);
    } catch (error) {
        console.error('Error sending player data:', error);
    }



    const hintsContainer = document.querySelector('.col-md-6:nth-child(2)');
    hintsContainer.innerHTML = '';

    const endGameCard = document.createElement('div');
    endGameCard.className = "card mt-4";
    endGameCard.style.border = "2px solid black";
    let message = '';

    if (score > 5) message = 'Good job!';
    else message = 'Try Harder!';
    endGameCard.innerHTML = `
        <div class="card-body text-center">
            <h5 class="card-title">${message}</h5>
            <p class="card-text">Your Score: ${score.toFixed(2)}</p>
            <p class="card-text">History: ${history.map(item => item ? '<span class="w">W</span> ' : '<span class="l">L</span> ').join(' ')}</p>
            <div class="button-container mt-3">
            </div>
            <div class="button-container mt-3">
        <!-- WhatsApp Share Button -->
        <a href="https://wa.me/?text=I%20scored%20${score.toFixed(2)}%20on%20%22Where%20Am%20I%22%20in%20Room%20ID%20${gameId}.%20Can%20you%20beat%20it%3F%0ATry%20it%20for%20free%2C%20no%20ads%2C%20at%20https%3A%2F%2Fsortira.github.io%2Fwhereami" target="_blank" rel="noopener noreferrer" class="btn btn-custom me-2">
            Share on WhatsApp
        </a>
        <!-- Twitter Share Button -->
        <a href="https://twitter.com/intent/tweet?text=I%20scored%20${score.toFixed(2)}%20on%20%22Where%20Am%20I%3F%22.%20Can%20you%20beat%20it%3F%0ATry%20it%2C%20for%20free%2C%20no%20ads%20at%20https%3A%2F%2Fsortira.github.io%2Fwhereami" target="_blank" rel="noopener noreferrer" class="btn btn-custom">
            Share on Twitter
        </a>
    </div>
        </div>
    `;
    hintsContainer.appendChild(endGameCard);

    const leaderboardButton = document.createElement('button');
    leaderboardButton.className = "btn btn-custom mt-3 mr-3";
    leaderboardButton.textContent = "See LeaderBoard";
    leaderboardButton.onclick = () => {
        window.location.href = 'https://whereamigame.pythonanywhere.com/get-leaderboard';
    };

    const playAgainButton = document.createElement('button');
    playAgainButton.className = "btn btn-custom mt-3 mr-3";
    playAgainButton.textContent = "Play Again";
    playAgainButton.onclick = () => {
        window.location.href = 'https://whereamigame.pythonanywhere.com/joingame';
    };

    const homeButton = document.createElement('button');
    homeButton.className = "btn btn-custom mt-3 ml-3";
    homeButton.textContent = "Home";
    homeButton.onclick = () => {
        window.location.href = 'https://sortira.github.io/whereami/index.html';
    };

    const buttonContainer = endGameCard.querySelector('.button-container');
    buttonContainer.appendChild(leaderboardButton);
    buttonContainer.appendChild(playAgainButton);
    buttonContainer.appendChild(homeButton);
    gameOverAudio.play();
};

/**
 * Displays a floating message indicating whether the guess was correct.
 * 
 * @param {boolean} isCorrect - Indicates if the guess was correct.
 */
function showFloatingMessage(isCorrect) {
    const floatingMessage = document.createElement("div");
    floatingMessage.textContent = isCorrect ? "Correct." : "Incorrect.";
    floatingMessage.style.position = "fixed";
    floatingMessage.style.bottom = "50px";
    floatingMessage.style.left = "50%";
    floatingMessage.style.transform = "translateX(-50%)";
    floatingMessage.style.padding = "10px 20px";
    floatingMessage.style.borderRadius = "5px";
    floatingMessage.style.color = "white";
    floatingMessage.style.backgroundColor = isCorrect ? "green" : "red";
    floatingMessage.style.fontSize = "18px";
    floatingMessage.style.opacity = "1";

    document.body.appendChild(floatingMessage);

    setTimeout(() => {
        floatingMessage.style.transition = "all 1s ease";
        floatingMessage.style.opacity = "0";
        floatingMessage.style.bottom = "200px";
    }, 100);

    setTimeout(() => {
        floatingMessage.remove();
    }, 1100);
};

/**
 * Starts the game round with the selected hints.
 * 
 * @param {Array} selectedHints - The hints selected by the user.
 */
const startGameRound = async (selectedHints) => {
    if (round > 5 || incorrect >= 3) {
        endGame();
        return;
    }
    let country;
    const requestData = { gameId: gameId, round: round };

    try {
        const response = await fetch('/getrounddata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) throw new Error('Network response was not ok');
        country = await response.json();
    } catch (e) {
        console.log(e);
    }

    const hintsContainer = document.querySelector('.col-md-6:nth-child(2)');
    hintsContainer.innerHTML = '';

    const roundCard = document.createElement('div');
    roundCard.className = "card mt-4";
    roundCard.style.border = "2px solid black";

    let formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval); 
            endGame(); 
        } else {
            timeRemaining--; 
            roundCard.innerHTML = `
                <div class="card-body text-center">
                    <h5 class="card-title">Round ${round} / 5</h5>
                    <p class="card-text">Score: ${score.toFixed(2)}</p>
                    <p class="card-text">Time Remaining: ${formatTime(timeRemaining)}</p>
                    <p class="card-text">Lives Remaining: ${lives}</p>
                    <p class="card-text">History: ${history.map(item => item ? '<span class="w">W</span> ' : '<span class="l">L</span> ').join(' ')}</p>
                </div>
            `;
        }
    }, 1000); // Update every second

    hintsContainer.appendChild(roundCard);

    const hintsList = document.createElement('ul');
    hintsList.className = "list-group mt-3";
    selectedHints.forEach(hint => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item";
        listItem.style.border = "2px solid black";
        listItem.style.color = "black";
        let item = country[json_codes[hint]];
        if (hint === 'flag') {
            const flagImage = document.createElement('img');
            flagImage.src = `https://flagsapi.com/${country["alpha2Code"]}/flat/64.png`;
            flagImage.alt = `Flag Image`;
            flagImage.style.margin = "5px";  // Spacing around the image

            flagImage.style.display = "inline-block";  // Ensures the border hugs the image tightly
            flagImage.style.padding = "0";  // Remove any padding
            flagImage.style.boxSizing = "border-box";  // Include border in image size


            listItem.textContent = 'Flag Image: ';
            listItem.appendChild(flagImage);
            hintsList.appendChild(listItem);
            return;
        }
        if (hint === 'borders') {
            let len = 0;
            try {
                len = item.length;
                if (len === 0) item = 'No border nations.';
            } catch (e) {
                item = 'No border nations.';
            }
        }
        if (hint === 'capital') {
            try {
                if (typeof item !== "string") {
                    item = 'No capital city.';
                }
            } catch (e) {
                item = 'No capital city.';
            }
        }
        if (hint === 'cioc') {
            try {
                if (typeof item !== "string") {
                    item = 'No capital city.';
                }
            } catch (e) {
                item = 'No capital city.';
            }
        }
        listItem.textContent = getPrettyHint(hint) + " : " + item;
        hintsList.appendChild(listItem);
    });
    hintsContainer.appendChild(hintsList);

    const feedbackMessage = document.createElement('p');
    feedbackMessage.className = "mt-3";
    hintsContainer.appendChild(feedbackMessage);

    const guessInput = document.createElement('input');
    guessInput.type = "text";
    guessInput.className = "form-control mt-3";
    guessInput.placeholder = "Type your guess for the country";
    guessInput.pattern = "[A-Za-z ]+";
    guessInput.required = true;
    hintsContainer.appendChild(guessInput);

    const submitGuessButton = document.createElement('button');
    submitGuessButton.className = "btn btn-custom mt-3";
    submitGuessButton.textContent = "Submit Guess";
    submitGuessButton.id = "submit-guess-button";
    hintsContainer.appendChild(submitGuessButton);

    submitGuessButton.onclick = () => {
        const userGuess = guessInput.value.trim().toLowerCase();
        console.log("[LOG] The user guessed : " + userGuess);
        if (userGuess === '') {
            return;
        }
        let correct = country["name"].toLowerCase().indexOf(userGuess) != -1 || country["nativeName"].toLowerCase().indexOf(userGuess) != -1;
        correct &= userGuess.length > 3;

        if (correct) {
            score += low * 0.4 + medium * 0.5 + high * 0.9;
            feedbackMessage.textContent = "Correct!";
            history.push(true);
            showFloatingMessage(true);
            correctAudio.play();
        } else {
            feedbackMessage.textContent = "Incorrect!";
            score -= low * 0.2 + medium * 0.3 + high * 0.6;
            history.push(false);
            incorrect += 1;
            showFloatingMessage(false);
            if (lives > 0) {
                lives -= 1;
            }
            wrongAudio.play();
        }
        round += 1;
        guessInput.value = '';
        startGameRound(selectedHints);
    };
}

document.getElementById('submit-choices-button').onclick = () => {
    const selectedHints = getSelectedCheckboxes();
    gameId = document.getElementById('gameId').value;
    playerName = document.getElementById('playerName').value;
    hints = selectedHints;
    setJsonCodes();
    if (selectedHints.length > 0) {
        setJsonCodes();
        startGameRound(selectedHints);
    } else {
        console.log("No hints selected.");
    }
}
