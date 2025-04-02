//Class called Practice to encompasses all the practice-related features.
class Practice {
//constructor for an array of questions 
    constructor(practiceData) {
//Properties for the practice are initialised 
      this.practiceData = practiceData; //stores the practice questions
      this.currentQuestion = 0; //stores the current questions index
      this.score = 0; //stores the user’s score
      this.incorrectAnswers = []; //stores the answers that are incorrectly answered to the questions

//HTML elements referenced by their ids
      this.practiceContainer = document.getElementById('practice');
      this.resultContainer = document.getElementById('result');
      this.submitButton = document.getElementById('submit');
      this.retryButton = document.getElementById('retry');
      this.showAnswerButton = document.getElementById('showAnswers');

//Event listeners which listens out for when an event happens, a click
      this.submitButton.addEventListener('click', () => this.checkAnswer());
      this.retryButton.addEventListener('click', () => this.retryQuiz());
      this.showAnswerButton.addEventListener('click', () => this.showAnswers());
  
      this.displayQuestion(); //Displays the initial first question of the practice multiple choice questions
    }

//Fisher Yates shuffle algorithm used to randomly shuffle the elements of an array
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); //Picks a random index j that's between 0 and I
        [array[i], array[j]] = [array[j], array[i]]; //Swap the elements i and j using a destructing assignment
      }
    }
//Displays the practice multiple choice current question linking to the HTML document
    displayQuestion() {
      const questionData = this.practiceData[this.currentQuestion]; //Gets the current question from its index 
//Create the question element where a div tag is used to display the text of the current question
      const questionElement = document.createElement('div');//Adds the styling for the question using the class; question
      questionElement.innerHTML = questionData.question;
  
      const optionsElement = document.createElement('div');
      optionsElement.className = 'options';//Adds the styling for the options using the class; options
//Constant variable that shuffles the options array 
//Prevents the modification of the original order
      const shuffledOptions = [...questionData.options];
      this.shuffleArray(shuffledOptions);
  
      shuffledOptions.forEach(optionText => {
        const option = document.createElement('label');
        option.className = 'option';
//Radio button for each option 
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'practice';
        radio.value = optionText;
  
        option.appendChild(radio);
        option.appendChild(document.createTextNode(optionText));
        optionsElement.appendChild(option);
      });
  
      this.practiceContainer.innerHTML = ''; //Clears the previous question
      this.practiceContainer.appendChild(questionElement);
      this.practiceContainer.appendChild(optionsElement);
    }
    //Checks the user's selected answer
    checkAnswer() {
      const selectedOption = document.querySelector('input[name="practice"]:checked');
      if (selectedOption) {0
        const answer = selectedOption.value;//Gets the selected answer
        if (answer === this.practiceData[this.currentQuestion].answer) {
          this.score++; //Increase the score by one if the user's answer is correct
        } else {
          this.incorrectAnswers.push({ //Stores the incorrect user's answer 
            question: this.practiceData[this.currentQuestion].question,
            incorrectAnswer: answer,
            correctAnswer: this.practiceData[this.currentQuestion].answer,
          });
        }
        this.currentQuestion++;//Program moves onto the next question
        if (this.currentQuestion < this.practiceData.length) {//Checks if there are questions that are still left on the array
          this.displayQuestion();//Shows the next question
        } else {
          this.displayResult();//Shows the practice results
        }
      }
    }
    
//Displays the user's result for the practice
    displayResult() {
    //hide these properties
      this.practiceContainer.style.display = 'none';
      this.submitButton.style.display = 'none';
      //Show these properties
      this.retryButton.style.display = 'inline-block';
      this.showAnswerButton.style.display = 'inline-block';
      //Displays the player's final score 
      this.resultContainer.innerHTML = `You scored ${this.score} out of ${this.practiceData.length}!`;
    }

  //Function to regenerate the practice
    retryQuiz() {
    //resets the properties
      this.currentQuestion = 0;
      this.score = 0;
      this.incorrectAnswers = [];

      //Resets the HTML elements referenced by their ids
      this.practiceContainer.style.display = 'block';
      this.submitButton.style.display = 'inline-block';
      this.retryButton.style.display = 'none';
      this.showAnswerButton.style.display = 'none';
      this.resultContainer.innerHTML = '';
      //Displays the initial first question of the practice multiple choice questions
      this.displayQuestion();
    }
  
    showAnswers() {
      //hide these properties
      this.practiceContainer.style.display = 'none';
      this.submitButton.style.display = 'none';
      this.retryButton.style.display = 'inline-block';//Shows the retry button 
      this.showAnswerButton.style.display = 'none';
//Displays the question, user's incorrect answer and the correct answer
      let incorrectAnswersHtml = this.incorrectAnswers.map(
        ans => `<p>
                  <strong>Question:</strong> ${ans.question}<br>
                  <strong>Your Answer:</strong> ${ans.incorrectAnswer}<br>
                  <strong>Correct Answer:</strong> ${ans.correctAnswer}
                </p>`
      ).join('');
//Displays the user's final score and their incorrect answers
      this.resultContainer.innerHTML = `
        <p>You scored ${this.score} out of ${this.practiceData.length}!</p>
        <p>Incorrect Answers:</p>
        ${incorrectAnswersHtml}
      `;
    }
  }
  
  // Initialize the practice
  const practices = new Practice([
    { question: '9 x (3 + 3)', options: ['27', '54', '30', '72'], answer: '54' },
    { question: '72 ÷ (11 - 3)', options: ['4', '45', '1', '9'], answer: '9' },
    { question: '3² ÷ 3 - 3', options: ['9', '3', '6', '27'], answer: '6' },
    { question: '(26 - 11) ÷ 5', options: ['10', '3', '15', '5'], answer: '3' },
    { question: '8 x 40 ÷ 10', options: ['32', '48', '4', '10'], answer: '32' },
    { question: '8 + 9 x 2²', options: ['68', '76', '26', '44'], answer: '44' },
    { question: '12 - 2 x 4', options: ['56', '4', '20', '40'], answer: '4' },
    { question: '((5 - 3) x 30) - 17', options: ['32', '99', '43', '188'], answer: '43' },
    { question: '100 - (7 - 2²)', options: ['98', '97', '96', '95'], answer: '97' },
    { question: '(1² ÷ 1) x 1 + 1 - 1', options: ['2', '1', '0', '3'], answer: '1' }
  ]);
  



