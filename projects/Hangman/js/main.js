// Picking a random word
let wordList = ['ремонт', 'обезьяна', 'автомобиль', 'кондиционер', 'лесопилка', 'телевизор', 'школа', 'космонавт', 'слон', 'ноутбук', 'кресло', 'джунгли', 'изобретатель'];
let word = wordList[Math.floor(Math.random() * wordList.length)];
let progressCounter = word.length;
let numberOfMoves = 20;
let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}

// Game cycle
while ((progressCounter > 0) && (numberOfMoves > 0)) {
    // Show the player their progress
    alert(answerArray.join(' ') + '\nОсталось:\n' + progressCounter + ' букв\n' + numberOfMoves + ' ходов');

    // Take input from the player
    let guess = prompt('Угадай букву или нажми \'Cancel\' для выхода из игры.');

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Введи одну букву.');
    } else {
        numberOfMoves--;
        guess = guess.toLowerCase();
        // Update answerArray and progressCounter
        for (let j = 0; j < word.length; j++) {
            if ((word[j] === guess) && (answerArray[j] === '_')) {
                answerArray[j] = guess;
                progressCounter--;
            }
        }
    }
}

// for every correct guess
alert(answerArray.join(' '));

if (numberOfMoves > 0) {
    alert('Отличная работа! Правильное слово - ' + word);
} else {
    alert('Вы проиграли: закончились ходы.\nПравильное слово - ' + word);
}
