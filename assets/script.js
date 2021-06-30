console.log("yes you hooked up the path")

var timeCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("startQuiz");
var holdQuestions = document.querySelector("holdQuestions")

var secondsLeft = 60;

var Quiz= {
    Question0:  ["wrong","correct","incorrect","Nope"],
    
}

var Question1= { 
    No: "Wrong",
    Null: "Wrong",
    Yes: "Correct",
    Nope: "Wrong",
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
        sendMessage();
      }
  
    }, 1000);
  }

  setTime();

  function launchQuiz (event) {
    event.preventDefault();

    document.holdQuestions.appendChild(Question1)
  }


   startQuizBtn.addEventListener("click", launchQuiz (event))
