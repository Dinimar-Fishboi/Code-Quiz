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

// Okay listen this course is great for building a foundation but we need
// to do some terminology stuff because these questions THREW me.

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

// Are you one of those people who can do a test and recall the answer
// based on the positioning? SAME! So this will randomise the Q's and 
// the A's.

function shuffleArray() {
  questionArray.sort(() => Math.random() - 0.5);
  questionOne.possibleAnswers.sort(() => Math.random() - 0.5);
  questionTwo.possibleAnswers.sort(() => Math.random() - 0.5);
  questionThree.possibleAnswers.sort(() => Math.random() - 0.5);
  questionFour.possibleAnswers.sort(() => Math.random() - 0.5);
}

shuffleArray();

//Function that is called when the 'Start Quiz' button is pressed.
// Each block of HTML is always present on the screen, but it becomes
// obvious that there is a path the user has to take in order to get
// through the course, so I just changed the display style for each
// block as needed.

startQuizBtn.addEventListener("click",function launchQuiz (event) {
  event.preventDefault();
  shuffleArray();
  document.getElementById("main").style.display = 'none';
  document.getElementById("holdQuestions").style.display = 'block';
  // document.getElementById("hideHighscores").style.display = 'block';
  // document.getElementById("viewHighscores").style.display = 'none';
  secondsLeft = 60;
  setTime();
  quizBegins();
  });

// Below is the function affecting the timer in the Top Right corner
// of the HTML.

function setTime() {
  var timerInterval = setInterval(function() {
  secondsLeft--;
  timeCountdown.textContent = secondsLeft;

  // Here is the code to stop the Quiz when the timer runs out.

  if (secondsLeft <= 0 && quizIndex !== 4) {
      clearInterval(timerInterval);
      console.log("Ran out of time")

    // The next 3 lines respectively hide the Q&A section, show the
    // form to enter your score and reset the quizIndex button - this
    // ensures that every time the quiz is run, each question will appear.

      document.getElementById("holdQuestions").style.display = 'none'
      document.getElementById("recordScore").style.display = 'block'
      quizIndex = 0;
    
    // Even if the user runs out of time, their score will still be 0
    // and they can enter that as a highscore.

      localStorage.setItem("finalScore", JSON.stringify(secondsLeft) )
      document.getElementById('finalScore').innerHTML = localStorage.getItem("finalScore");
      document.getElementById('exampleList').innerHTML = "";
      document.getElementById('questionTitle').innerHTML = "";
      return;
    
      } 

  // A quizIndex value is added every time a question is answered, so if
  // quizIndex ===4 this means that the quiz has finished and the timer
  // can stop.

  if (quizIndex === 4){
    clearInterval(timerInterval);
    quizIndex = 0;
    return;
    }
  
  }, 1000);
}

// quizBegins exists seperately from launchQuiz because placing them together
// was a messy headache. Essentially what happens here is each question
// is called through the questionArray until all 4 questions have been 
// summoned. And we accomplished this through the quizIndex variable,
// which always starts at 0.

function quizBegins(){

var i = quizIndex
var answerList = document.getElementById("exampleList")
document.getElementById('answerStatus').innerHTML = "";

for (g = 0; g < 4 ; g++) {
    
    document.getElementById('questionTitle').innerHTML = questionArray[i].thisIsTheQuestion;
    var liElement = document.createElement('li');
    liElement.innerHTML = questionArray[i].possibleAnswers[g]
    answerList.appendChild(liElement);
 
    liElement.addEventListener('click', function(event){

      // Below conditional statement necessary for assigning the penalty
      // of having selected the wrong answer, as well as the alert.

        // var alertTime =1;

        // alertShow = setInterval(function(){

        //   if (alertTime > 0) {

            if (event.target.textContent === questionArray[i].correctAnswer) {
              console.log("That's it!");
              document.getElementById('answerStatus').innerHTML = "Correct!";
              // alertTime--;

            } else { 
            console.log("Nope");
            secondsLeft = secondsLeft - 15;
            document.getElementById('answerStatus').innerHTML = "Wrong!";
              // alertTime--
            }
          // }

    //       if (alertTime === 0) {
    //         document.getElementById('answerStatus').innerHTML = "";
    //         clearInterval(alertShow);
    //       }
    // }, 1000);


    // These lines reset the HTML block that holdsQuestions before the 
    // quiz finishes or summons the next question.

      quizIndex = quizIndex + 1;      
      document.getElementById('exampleList').innerHTML = "";
      document.getElementById('questionTitle').innerHTML = "";
      
      // This conditional statement sends us back to the setTimer function.

      if (secondsLeft <= 0) {
        secondsLeft = 0;
      }

      // And here is the consequence of quizIndex. Basically if all 4
      // questions have been asked then the secondsLeft = score and we
      // can move onto the block that will recordScore. If less than 4
      // questions have been asked then then the next question in the
      // shuffled array will be summoned. 
        //* Please note that hypothetically if more questions need to be
        // added then we just need to change the next line and add to 
        // the question array (and I guess change the amount of time
        // you start with), which makes this code easy to update.

      if (quizIndex === 4) {
        
        document.getElementById('answerStatus').innerHTML = "";
        document.getElementById("holdQuestions").style.display = 'none';
        document.getElementById("recordScore").style.display = 'block';
        localStorage.setItem("finalScore", JSON.stringify(secondsLeft) )
        document.getElementById('finalScore').innerHTML = localStorage.getItem("finalScore");
        return;
        } else {
          quizBegins();
        }
      })
    }
  }  

// This is how we are going to store the scores. Simple form to record the
// user input. Please note there are no penalties for unusual submissions,
// because I'm not a killjoy.

submitInitialsBtn.addEventListener("click", function recordScore (event) {
  
  event.preventDefault();
  var initialsProvided = document.querySelector("#enteredInitials").value;
  localStorage.setItem("enteredInitials", JSON.stringify(initialsProvided));
  document.getElementById("recordScore").style.display = 'none';

  // Also - you don't need to enter your initials if you get 0, you have
  // the option of not recording that :)

  if (initialsProvided === "") {
    document.getElementById("main").style.display = 'block';
    return;
  }

  // Then below is where we reset the Form and show the 
  // highscoreTracker block. This will cover the Main block, but we
  // can access that later.

  document.getElementById("scoreForm").reset();
  document.getElementById("highscoreTracker").style.display = 'block'
  document.getElementById("main").style.display = 'block';

  // Then, we need to create an li with the respective score and initals. This ends the
  // main user pathway so that the user can eithe play again or clear the scores.

  var scoreLi = document.createElement('li');
  var userInitials = JSON.parse(localStorage.getItem("enteredInitials"));
  var timeLeft = localStorage.getItem("finalScore");
  scoreLi.innerHTML = userInitials +":             "+ timeLeft;
  listOfScores.appendChild(scoreLi);
});

// Return to the main block, or wherever you were pre selecting the
// View Highscores button.

goBackBtn.addEventListener("click", function goBack (event){
  event.preventDefault();
  document.getElementById("highscoreTracker").style.display = 'none';
})

// Removing the highscores.

clearHighscoresBtn.addEventListener("click", function clearHighscores(event){
  event.preventDefault();
  document.getElementById('listOfScores').innerHTML = "";
})

// Viewing the highscores. This button is will overwrite everything on the page,
// as the associated block has been style with position:absolute.
// It also does NOT pause the timer, however it's very easy to go back.

viewHighscoresBtn.addEventListener("click", function viewHighscores(event){
  event.preventDefault();
  document.getElementById("highscoreTracker").style.display = 'block';
})
