console.log("yes you hooked up the path")

var timeCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#startQuiz");
var holdQuestions = document.querySelector("#holdQuestions")
// var questionTitle = document.querySelector('#questionTitle')

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
    //document.holdQuestions.appendChild(Question1);
    document.getElementById('questionTitle').innerHTML = Question1.ThisIsTheQuestion;
        
        console.log(Question1.possibleAnswers);
        var liElement = document.createElement("LI");
        
        for (i = 0; i < Question1.possibleAnswers.length ; i++) {
            console.log(Question1.possibleAnswers[i])
            liElement.appendChild(Question1.possibleAnswers);

        }

     //  var answerChoice = document.createTextNode(Question1.possibleAnswers[i]);
     //  console.log(answerChoice);
        // document.getElementById('answerList').appendChild(liElement);
        
  });

