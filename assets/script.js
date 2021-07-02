console.log("yes you hooked up the path")

var timeCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#startQuiz");
var holdQuestions = document.querySelector("#holdQuestions")
// var questionTitle = document.querySelector('#questionTitle')

var liElement =0;

var secondsLeft = 60;


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
}

shuffleArray();

console.log(questionArray[1].thisIsTheQuestion)


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
    shuffleArray();

    //function cardFlip(event) {
    
    for (i = 0; i < questionArray.length ; i++) {

    // We are going to have a small group of random questions that are going 
    // to be randomly generated each round.
    // To do this we will bring in our little friend, the SHUFFLE ARRAY

    // What we want to do here is apply questionOne.thisIsTheQuestion to a 
    // h2 element (which still needs to be created in Index.html), and add
    // questionOne .possibleAnswers to a ul and li file.
    //document.holdQuestions.appendChild(questionOne );
   document.getElementById('questionTitle').innerHTML = questionArray[1].thisIsTheQuestion;
      console.log(questionArray[1])    

        var answerList = document.createElement("ul");
        holdQuestions.appendChild(answerList);
        console.log(event.target)
        for (i = 0; i < 4 ; i++) {
            
            var liElement = document.createElement('li');

            console.log(questionArray[1].possibleAnswers[i]);
            liElement.textContent = questionArray[1].possibleAnswers[i]
            liElement.innerHTML = questionArray[1].possibleAnswers[i]

            console.log(answerList);
            answerList.appendChild(liElement);
            // console.log(event.currentTarget)
            //liElement.textContent(questionOne.possibleAnswers);
            liElement.addEventListener('click', function(event){
              var chosenAnswer = event.target.textContent;
              console.log(chosenAnswer)
              console.log(questionArray[1].correctAnswer)
              
              if (event.target.textContent === questionArray[1].correctAnswer){
                console.log("That's it!");

              } else { console.log("Nope");
              }

              holdQuestions.removeChild(answerList)
              document.getElementById('questionTitle').innerHTML = "";

            })
        }
      }
        // When one liElement is clicked, we need an event listener to hear the click
        // How does the parent react when the li is clicked?
        // Remember event.target
  });

