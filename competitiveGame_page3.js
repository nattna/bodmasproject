/*document.addEventListener("DOMContentLoaded", function () {
    let countDownTime = 100;
    const countdownElement = document.getElementById("countdown");

    const countdownTimer = setInterval(() => {
        countDownTime--;
        countdownElement.textContent = countDownTime;

        if (countDownTime <= 0) {
            clearInterval(countdownTimer);
            window.location.href = "competitiveGame_page3.html";
        }
    }, 1000);
});

var questions = ["What is 2+2?", "What is 3+3?", "What is 4+4?"];
var answers = ["4", "6", "8"];
var counter = 0
var score = 0
var questionSpace = document.getElementById("questionSpace")
var userInput = document.getElementById("userInput")
var scoreSpace = document.getElementById("scoreSpace")


questionSpace.innerHTML = questions[0]


function submit() {
    if(userInput.value == answers[counter]) {
        score++
        update()
    } else {
        update()
    } 
}

function update() {
    if(counter == (questions.length-1)) {
        scoreSpace.innerHTML = score
    } else {
        counter++
        questionSpace.innerHTML = questions[counter]
        userInput.value = ""
            }
}*/
/*const quizData = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet?", answer: "Jupiter" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Which ocean is the largest?", answer: "Pacific Ocean" }
];

class Quiz {
    constructor(quizData) {
        this.quizData = quizData;
        this.currentQuestion = 0;
        this.score = 0;
        this.timeLeft = 100; // Countdown timer in seconds

        this.quizContainer = document.getElementById("quiz");
        this.answerInput = document.getElementById("answerInput");
        this.submitButton = document.getElementById("submit");
        this.retryButton = document.getElementById("retry");
        this.resultContainer = document.getElementById("result");
        this.timerElement = document.getElementById("countdown");

        this.submitButton.addEventListener("click", () => this.checkAnswer());
        this.retryButton.addEventListener("click", () => this.retryQuiz());

        this.startTimer();
        this.displayQuestion();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.timerElement.textContent = this.timeLeft;
            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.endQuiz();
            }
        }, 1000);
    }

    displayQuestion() {
        if (this.currentQuestion < this.quizData.length) {
            this.quizContainer.innerHTML = `<p>${this.quizData[this.currentQuestion].question}</p>`;
            this.answerInput.value = ""; // Clear input field
        } else {
            this.endQuiz();
        }
    }

    checkAnswer() {
        const userAnswer = this.answerInput.value.trim().toLowerCase();
        const correctAnswer = this.quizData[this.currentQuestion].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            this.score++;
        }

        this.currentQuestion++;
        this.displayQuestion();
    }

    endQuiz() {
        clearInterval(this.timerInterval);
        this.quizContainer.innerHTML = "";
        this.submitButton.style.display = "none";
        this.retryButton.style.display = "inline-block";
        this.resultContainer.innerHTML = `Quiz Over! You scored ${this.score} out of ${this.quizData.length}.`;
    }

    retryQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.timeLeft = 30;

        this.retryButton.style.display = "none";
        this.submitButton.style.display = "inline-block";
        this.resultContainer.innerHTML = "";

        this.startTimer();
        this.displayQuestion();
    }
}

const quiz = new Quiz(quizData);*/

//Class called Game to encompasses all the game-related features
class Game {
//constructor for an array of questions 
    constructor(gameData) {
    //Properties for the practice are initialised 
      this.gameData = gameData;//stores the practice questions
      this.currentQuestion = 0;//stores the current questions index
      this.score = 0;//stores the user’s score
      this.countDownTime = 100;//stores the initial countdown time

     //HTML elements referenced by their ids
      this.gameContainer = document.getElementById('gamepage');
      this.UserInput = document.getElementById("UserInput");
      this.resultContainer = document.getElementById('result');
      this.submitButton = document.getElementById('submit');
      this.retryButton = document.getElementById('retry');
      this.countdownElement = document.getElementById("countdown");
      this.scoreSpace = document.getElementById("scoreSpace");
  

      //Event listeners which listens out for when an event happens, a click
      this.submitButton.addEventListener('click', () => this.checkAnswer());
      this.retryButton.addEventListener('click', () => this.retryGame());

      //Displays the initial first question of the game
      this.displayQuestion();
      //Starts running the countdown of the game
      this.startCountdown();
    }
    //Function that starts the countdown of the game
    startCountdown() {
        this.countdownTimer = setInterval(() => {
            this.countDownTime--;//decrements the value every second
            //updates the user interface for the countdown integer
            this.countdownElement.textContent = this.countDownTime;
            if (this.countDownTime === 0) {
                clearInterval(this.countdownTimer);
                this.endGame();//function runs when the countdown reaches 0 
            }
            //The function is run every 1000 milliseconds (= 1 second)
        }, 1000);
    }
  
    //Displays the game questions linking to the HTML document
      displayQuestion() {
        if (this.currentQuestion < this.gameData.length) {
            document.getElementById('questionSpace').textContent = this.gameData[this.currentQuestion].question;
            // Clears the user input field for the next question
            this.UserInput.value = "";
        } else {
            //runs when there are no more questions
            this.endGame();
        }
    }

    checkAnswer() {
        // Converts the player's answer to lowercase for case-insensitive comparison
        const userAnswer = this.UserInput.value.trim().toLowerCase();
        // The correct answer is fetched from the gameData and converted it to lowercase
        const correctAnswer = this.gameData[this.currentQuestion].answer.toLowerCase();
        // The player's answer is checked against the correct answer
        if (userAnswer === correctAnswer) {
            this.score+=50; //increases the score by 50 points if their answer is correct
            this.scoreSpace.textContent = `SCORE: ${this.score}`; //The score display is updated
        } else {
            this.score+=20;//increases the score by 20 points if their answer is incorrect
            this.scoreSpace.textContent = `SCORE: ${this.score}`; //The score display is updated
        }

        this.currentQuestion++;//Program moves onto the next question
        if (this.currentQuestion < this.gameData.length) {
        //Checks if there are questions that are still left on the array
          this.displayQuestion();
        } else {
          this.displayResult();//Shows the game results
        }
      }
    
    //Displays the user's result for the game
    displayResult() {
        //hide these properties
          this.gameContainer.style.display = 'none';
          this.submitButton.style.display = 'none';
          this.UserInput.style.display = 'none';
          //Show these properties
          this.retryButton.style.display = 'inline-block';
          //Displays the player's final score 
          this.resultContainer.innerHTML = `GAME OVER! You scored ${this.score}!`;
        }
    
  //Function for when the countdown reaches 0
    endGame() {
      //Clears the countdown interval, making it stop
      clearInterval(this.countdownTimer);
      this.displayResult();//Runs this function 
    }
    //Function to regenerate the practice
    retryGame() {
    //resets the properties
      this.currentQuestion = 0;
      this.score = 0;
      this.incorrectAnswers = [];
      this.countDownTime  = 100;
  //Resets the HTML elements referenced by their ids
      this.gameContainer.style.display = 'block';
      this.submitButton.style.display = 'inline-block';
      this.retryButton.style.display = 'none';
      this.resultContainer.innerHTML = '';
      this.scoreSpace.textContent = `Score: ${this.score}`;
      this.UserInput.style.display = 'block'; 
      //Starts running the countdown of the game
      this.startCountdown();
      //Displays the initial first question of the game
      this.displayQuestion();
    }
}
  
  // Initialize the game
  const game = new Game([
    { question: "(5 x 7) + 6", answer: "41" },
    { question: "5 + 3 x 9", answer: "32" },
    { question: "(2 + 7) x 9", answer: "81" },
    { question: "4 + 6 ÷ 3", answer: "6" },
    { question: "36 ÷ (7 - 3)", answer: "9" },
    { question: "40 ÷ 8 - 4", answer: "1" },
    { question: "(26 - 11) ÷ 5", answer: "3" },
    { question: "(13 - 6) x 11", answer: "77" },
    { question: "5 + 8 x 3", answer: "29" },
    { question: "12 + 4 x 5", answer: "32" },
    { question: "8 x (9 - 3)", answer: "48" },
    { question: "3 x (5 + 2)", answer: "21" },
    { question: "2² x 4 ÷ 8", answer: "2" },
    { question: "23 - 2 x 9", answer: "5" },
    { question: "20 ÷ (2 + 3)", answer: "4" },
    { question: "51 - 5 x 3²", answer: "6" },
    { question: "13 - 33 ÷ 3", answer: "2" },
    { question: "72 ÷ (11 - 3)", answer: "9" },
    { question: "51 - 12 x 3", answer: "15" },
    { question: "36 ÷ (7 - 3)", answer: "9" },
    { question: "5² - 6 + 7", answer: "12" },
    { question: "9 x 5 + 2", answer: "47" }, 
    { question: "6 + 3² ÷ 3", answer: "9" },
    { question: "(5 + 2) x 9", answer: "63" },
    { question: "24 ÷ (6 - 4)", answer: "12" },
    { question: "45 ÷ (2 + 7)", answer: "55" },
    { question: "17 - (5 x 3)", answer: "2" },
    { question: "33 - 4 x 8", answer: "1" },
    { question: "11 + 32 ÷ 4", answer: "19" },
    { question: "16 ÷ (3 + 5)", answer: "24" },
    { question: "18 - 10 ÷ 2", answer: "13" },
    { question: "(19 - 8) x 2²", answer: "44" }
  ]);


  
