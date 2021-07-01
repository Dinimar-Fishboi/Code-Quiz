console.log("yes you hooked up the path")

var timeCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#startQuiz");
var holdQuestions = document.querySelector("#holdQuestions")
// var questionTitle = document.querySelector('#questionTitle')

var liElement =0;

var secondsLeft = 60;


var questionOne= { 
    thisIsTheQuestion: "What is 2 + 2?",
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

    // What we want to do here is apply questionOne.thisIsTheQuestion to a 
    // h2 element (which still needs to be created in Index.html), and add
    // questionOne .possibleAnswers to a ul and li file.
    //document.holdQuestions.appendChild(questionOne );
    document.getElementById('questionTitle').innerHTML = questionOne.thisIsTheQuestion;
        
        var answerList = document.getElementById("answerList");
        
        for (i = 0; i < questionOne.possibleAnswers.length ; i++) {
            
            var liElement = document.createElement('li');

            console.log(questionOne.possibleAnswers[i]);
            liElement.textContent = questionOne.possibleAnswers[i]
            console.log(answerList);
            answerList.appendChild(liElement);
            //liElement.textContent(questionOne.possibleAnswers);

        }

        // When one liElement is clicked, we need an event listener to hear the click
        // How does the parent react when the li is clicked?
        // Remember event.target
  });

