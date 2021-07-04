var viewHighscoresBtn = document.querySelector("#viewHighscores");
var timeCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#startQuiz");
var holdQuestions = document.querySelector("#holdQuestions");
var mainTitle = document.querySelector("#main");
var submitInitialsBtn = document.querySelector("#submitInitials");
var enteredInitials = document.querySelector("#enteredInitials");
var listOfScores = document.querySelector("#listOfScores");
var goBackBtn = document.getElementById("goBack");
var clearHighscoresBtn = document.getElementById("clearHighscores");
var quizIndex = 0
var liElement =0;
var secondsLeft = 0;



var questionOne= { 
    thisIsTheQuestion: "Explain Implicit Type Coercion in javascript",
    possibleAnswers: ["Converting all data types to 0 or 0n","Automatic conversion of value from one data type to another","The successful outcome of OR (||) operator","The comparison between variables using =="],
    correctAnswer: "Automatic conversion of value from one data type to another", 
} 

var questionTwo = {
  thisIsTheQuestion: "Which of these Values is NOT primitive?",
  possibleAnswers: ["Z","'Hello!'","8","false"],
  correctAnswer: "Z", 
}

var questionThree = {
  thisIsTheQuestion: "What is a Higher Order Function?",
  possibleAnswers: ["Implicit (or given) functions in the DOM","A function associated with a Third Party DOM","Functions that operate on other functions","Global functions that operate as soon as they are defined"],
  correctAnswer: "Functions that operate on other functions", 
}

var questionFour = {
  thisIsTheQuestion: "Which of these is NOT a form of Scope in JS?",
  possibleAnswers: ["Global Scope","Local or Function Scope","Block Scope","String Scope"],
  correctAnswer: "String Scope", 
}

questionArray = [questionOne, questionTwo, questionThree, questionFour]


function shuffleArray() {
  questionArray.sort(() => Math.random() - 0.5);
  questionOne.possibleAnswers.sort(() => Math.random() - 0.5);
  questionTwo.possibleAnswers.sort(() => Math.random() - 0.5);
  questionThree.possibleAnswers.sort(() => Math.random() - 0.5);
  questionFour.possibleAnswers.sort(() => Math.random() - 0.5);
}

shuffleArray();




startQuizBtn.addEventListener("click",function launchQuiz (event) {
  event.preventDefault();
  shuffleArray();
  document.getElementById("main").style.display = 'none';
  document.getElementById("holdQuestions").style.display = 'block';
  secondsLeft = 60;
  setTime();
  quizBegins();
 
  });

function setTime() {
// Sets interval in variable
var timerInterval = setInterval(function() {
  secondsLeft--;
  timeCountdown.textContent = secondsLeft;

  if (secondsLeft <= 0 && quizIndex !== 4) {
    // Stops execution of action at set interval
    //secondsLeft = 1
      clearInterval(timerInterval);
      console.log("Ran out of time")
    document.getElementById("holdQuestions").style.display = 'none'
    document.getElementById("recordScore").style.display = 'block'

    quizIndex = 0;
    // secondsLeft = 1;

    localStorage.setItem("finalScore", JSON.stringify(secondsLeft) )
    document.getElementById('finalScore').innerHTML = localStorage.getItem("finalScore");

    document.getElementById('exampleList').innerHTML = "";

    document.getElementById('questionTitle').innerHTML = "";

    return;
  
    } 

  if (quizIndex === 4){
    clearInterval(timerInterval);
    quizIndex = 0;
    return;
    }
  
  }, 1000);
}

function quizBegins(){

var i = quizIndex

var answerList = document.getElementById("exampleList")

document.getElementById('answerStatus').innerHTML = "";


console.log(event.target)
for (g = 0; g < 4 ; g++) {
    
    document.getElementById('questionTitle').innerHTML = questionArray[i].thisIsTheQuestion;

    var liElement = document.createElement('li');

    liElement.innerHTML = questionArray[i].possibleAnswers[g]

    answerList.appendChild(liElement);
    
    liElement.addEventListener('click', function(event){

      // Below conditional statement necessary for assigning the penalty
      // of having selected the wrong answer
      
      if (event.target.textContent === questionArray[i].correctAnswer) {
        console.log("That's it!");
        document.getElementById('answerStatus').innerHTML = "Correct!";


      } else { 
      console.log("Nope");
      secondsLeft = secondsLeft - 15;
      document.getElementById('answerStatus').innerHTML = "Wrong!";

    }

      quizIndex = quizIndex + 1;
      console.log(quizIndex)
      
      document.getElementById('exampleList').innerHTML = "";
      document.getElementById('questionTitle').innerHTML = "";
      
      // This conditional statement will reset the page and provide the
      // localStorage information.
      if (secondsLeft <= 0) {
        secondsLeft = 0;
      }

      if (quizIndex === 4) {
        
        document.getElementById('answerStatus').innerHTML = "";
        document.getElementById("holdQuestions").style.display = 'none';
        document.getElementById("recordScore").style.display = 'block';
        console.log(secondsLeft)
        localStorage.setItem("finalScore", JSON.stringify(secondsLeft) )
        document.getElementById('finalScore').innerHTML = localStorage.getItem("finalScore");
        return;
        } else {
          quizBegins();
        }
      })
    }
}  

submitInitialsBtn.addEventListener("click", function recordScore (event) {
  event.preventDefault();
  console.log("Initials Submitted")
  
  //This is where we are going to store the scores. 
  //enteredInitials.innerHTML = "";
  var initialsProvided = document.querySelector("#enteredInitials").value;
  localStorage.setItem("enteredInitials", JSON.stringify(initialsProvided));
  document.getElementById("recordScore").style.display = 'none';

  if (initialsProvided === "") {
    document.getElementById("main").style.display = 'block';
    return;
  }

  // Then below is where we reset the Form and show the block
  // highscoreTracker.
  document.getElementById("scoreForm").reset();
  document.getElementById("highscoreTracker").style.display = 'block'

  // Then, we need to create an li with the respective score and initals.
  var scoreLi = document.createElement('li');
  var userInitials = JSON.parse(localStorage.getItem("enteredInitials"));
  var timeLeft = localStorage.getItem("finalScore");
  scoreLi.innerHTML = userInitials +"       "+ timeLeft;
  listOfScores.appendChild(scoreLi);


});

goBackBtn.addEventListener("click", function goBack (event){
  event.preventDefault();
  document.getElementById("main").style.display = 'block';
  document.getElementById("highscoreTracker").style.display = 'none';
})

clearHighscoresBtn.addEventListener("click", function clearHighscores(event){
  event.preventDefault();
  document.getElementById('listOfScores').innerHTML = "";

})

viewHighscoresBtn.addEventListener("click", function viewHighscores(event){
  event.preventDefault();
  document.getElementById("main").style.display = 'none';
  document.getElementById("highscoreTracker").style.display = 'block';
})
