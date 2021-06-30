console.log("yes you hooked up the path")

var timeCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#startQuiz");
var holdQuestions = document.querySelector("#holdQuestions")

var secondsLeft = 60;


var Question1= { 
    ThisIsTheQuestion: "What is 2 + 2?",
    possibleAnswers: ["5","4","8","22"],
    correctAnswer: "4",
} 

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeCountdown.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
      //  sendMessage();
      }
  
    }, 1000);
  }

  setTime();




   startQuizBtn.addEventListener("click",function launchQuiz (event) {
    event.preventDefault();

    // What we want to do here is apply Question1.thisIsTheQuestion to a 
    // h2 element (which still needs to be created in Index.html), and add
    // Question1.possibleAnswers to a ul and li file.
    document.holdQuestions.appendChild(Question1);

  });
