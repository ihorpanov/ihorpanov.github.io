/* All answer option */
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4'),
      optionElements = document.querySelectorAll('.option'), /* All options */
      question = document.querySelector('#question'), /* Question */
      numberOfQuestion = document.querySelector('#number-of-question'), /* Number of question */
      numberOfAllQuestions = document.querySelector('#number-of-all-questions'), /* Number of all questions */
      answersTracker = document.querySelector('#answers-tracker'), /* Tracker wrapper */
      btnNext = document.querySelector('#btn-next'), /* Next button */
      correctAnswer = document.querySelector('#correct-answer'), /* Anount of correct answers */
      numberOfAllQuestions2 = document.querySelector('#number-of-all-questions-2'), /* Number of all questions 2 */
      btnTryAgain = document.querySelector('#btn-try-again'); /* Try again button */

let indexOfQuestion, /* Current question index */
    indexOfPage = 0, /* Page index */
    score = 0; /* Quiz result */

const questions = [
  {
    question: `'Осведомленность' на английском`,
    options: [
      'Awareness',
      'Satisfaction',
      'Capacity',
      'Validation'
    ],
    rightAnswer: 0
  },
  {
    question: `'Изобретение' на английском`,
    options: [
      'Opinion',
      'Integration',
      'Invention',
      'Compliment'
    ],
    rightAnswer: 2
  },
  {
    question: `'Придирчивый' на английском`,
    options: [
      'Handsome',
      'Integrated',
      'Simplified',
      'Picky'
    ],
    rightAnswer: 3
  }
];

numberOfAllQuestions.innerHTML = questions.length;

const load = () => {
  question.innerHTML = questions[indexOfQuestion].question;

  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];

  numberOfQuestion.innerHTML = indexOfPage + 1;
  indexOfPage++;
};

let completedAnswers = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitDuplicate = false;

  if (indexOfPage == questions.length) {
    quizOver();
  } else {
    if (completedAnswers.length > 0) {
      completedAnswers.forEach(item => {
        if (item == randomNumber) {
          hitDuplicate = true;
        }
      });
      if (hitDuplicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        load();
      }
    }
    if (completedAnswers.length == 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  }
  completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
  if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    el.target.classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  } else {
    el.target.classList.add('wrong');
    updateAnswerTracker('wrong');
  }
  disabledOption();
}

for (option of optionElements) {
  option.addEventListener('click', e => checkAnswer(e));
}

const disabledOption = () => {
  optionElements.forEach(item => {
    item.classList.add('disabled');
    if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add('correct');
    }
  });
}

const enableOptions = () => {
  optionElements.forEach(item => {
    item.classList.remove('disabled', 'correct', 'wrong');
  })
};

const answerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement('div');
    answersTracker.appendChild(div);
  })
};

const updateAnswerTracker = status => {
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
  if (!optionElements[0].classList.contains('disabled')) {
    alert('You have to chose one option');
  } else {
    randomQuestion();
    enableOptions();
  }
}

const quizOver = () => {
  document.querySelector('.quiz-over-modal').classList.add('active');
  correctAnswer.innerHTML = score;
  numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
  window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain)

btnNext.addEventListener('click', () => {
  validate();
})

window.addEventListener('load', () => {
  randomQuestion();
  answerTracker();
});