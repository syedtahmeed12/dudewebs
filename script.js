let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;
    const result = document.getElementById('result');

    if (guess < 1 || guess > 100) {
        result.textContent = "Please enter a number between 1 and 100.";
    } else if (guess < randomNumber) {
        result.textContent = "Too low! Try again.";
    } else if (guess > randomNumber) {
        result.textContent = "Too high! Try again.";
    } else {
        result.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('restart').style.display = 'block';
    }
});

document.getElementById('restart').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('result').textContent = '';
    this.style.display = 'none';
});
