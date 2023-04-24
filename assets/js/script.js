'use strict';
let message = document.querySelector('.message');
let h1 = document.querySelector('h1')


const makeSecretNum = function () {
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    return secretNumber;

}


let secretNumber = makeSecretNum();
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

const checkScore = function (num) {
    if (num <= 1) {
        document.querySelector('body').style.backgroundColor = '#e63946';
        document.querySelector('header').style.borderBottom = '8px dotted  #eee';
        message.style.display = 'none'
        h1.textContent = 'YOU LOST !';
        h1.style.display = 'block';
        num = 0;
        document.querySelector('.score').textContent = num;

    } else {
        num--;
        document.querySelector('.score').textContent = num;
    };
};

const winFunction = function () {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('header').style.borderBottom = '8px solid #eee';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉 Correct number !');
    document.querySelector('.number').textContent = secretNumber;
};

const hightScoreFunc = function (num) {
    let hightScore = Number(document.querySelector('.highscore').textContent);
    if (!hightScore || num > hightScore) {
        hightScore = num;
        document.querySelector('.highscore').textContent = hightScore
    }
};


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    const score = Number(document.querySelector('.score').textContent);
    h1.style.display = 'none';
    if (!guess) {
        displayMessage('🚫 No number !');
    } else if (guess === secretNumber) {
        winFunction();
        hightScoreFunc(score)

    } else if (guess !== secretNumber) {
        checkScore(score);
        displayMessage(guess > secretNumber ? 'Too hight !' : 'Too low !');
    }
});

const gameReset = function () {
    secretNumber = makeSecretNum();
    document.querySelector('body').style.backgroundColor = '#050505';
    document.querySelector('header').style.borderBottom = '8px dashed #eee';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    h1.style.display = 'block';
    message.style.display = 'block';
    h1.textContent = 'Guess My Number!';


}

document.querySelector('.again').addEventListener('click', function () {
    gameReset();
});