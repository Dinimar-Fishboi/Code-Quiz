
var timeCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#startQuiz");
var holdQuestions = document.querySelector("#holdQuestions");
var mainTitle = document.querySelector("#main");
var submitInitialsBtn = document.querySelector("#submitInitials");
var enteredInitials = document.querySelector("#enteredInitials");
var listOfScores = document.querySelector("#listOfScores");
var quizIndex = 0
var liElement =0;
var secondsLeft = 0;


var questionOne= { 
    thisIsTheQuestion: "Question 1",
    possibleAnswers: ["wrong","4","wrong","wrong"],
    correctAnswer: "4", 
} 

var questionTwo = {
  thisIsTheQuestion: "Question 2",
  possibleAnswers: ["wrong","wrong","8","wrong"],
  correctAnswer: "8", 
}

var questionThree = {
  thisIsTheQuestion: "Question 3?",
  possibleAnswers: ["wrong","16","wrong","wrong"],
  correctAnswer: "16", 
}

var questionFour = {
  thisIsTheQuestion: "Question 4?",
  possibleAnswers: ["wrong","wrong","wrong","44"],
  correctAnswer: "44", 
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

          if (quizIndex === 4) {
            document.getElementById("main").style.display = 'block';
            console.log(secondsLeft)
            localStorage.setItem("finalScore", secondsLeft )
            document.getElementById('finalScore').innerHTML = localStorage.getItem("finalScore");
            quizIndex = 0;
            secondsLeft = 1;
            return;
          } else {
          quizBegins();
          }
        })
       }
   }  

      startQuizBtn.addEventListener("click",function launchQuiz (event) {
        event.preventDefault();
        shuffleArray();
        document.getElementById("main").style.display = 'none'
        secondsLeft = 60;
        setTime();
        quizBegins();
        // This is where we place the secondsLeft = highscore variable. 
        // Also probably the localstorage?
        //document.getElementById("main").style.display = 'block'

       });

       function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeCountdown.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            document.getElementById("main").style.display = 'block'
            
            document.getElementById('exampleList').innerHTML = "";
    
            document.getElementById('questionTitle').innerHTML = "";
            
            return;
            // Calls function to create and append image
          //  sendMessage();
          }
      
        }, 1000);
      }

      submitInitialsBtn.addEventListener("click", function recordScore (event) {
        event.preventDefault();
        console.log("Initials Submitted")

        //This is where we are going to store the scores. 
//          enteredInitials.innerHTML = "";
        var initialsProvided = document.querySelector("#enteredInitials").value;
        localStorage.setItem("enteredInitials", initialsProvided);

        enteredInitials.innerHTML = ""
        document.getElementById("highscoreTracker").style.display = 'block'

        
        // listOfScores.textContent = enteredInitials.length;

        // for( q =0; q < enteredInitials.length; q++) {
        //   var userScore = userScore[q];
        //   var userScoreLi = document.createElement('li');
        //   userScoreLi.textContent = userScore;
        //   enteredInitials.appendChild(userScoreLi);
        // }


      });