console.log("yes you hooked up the path")

var timeCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#startQuiz");
var holdQuestions = document.querySelector("#holdQuestions")
var mainTitle = document.querySelector("#main")
// var questionTitle = document.querySelector('#questionTitle')
var questionNumber = 0;

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
  questionOne.possibleAnswers.sort(() => Math.random() - 0.5);
  questionTwo.possibleAnswers.sort(() => Math.random() - 0.5);
  questionThree.possibleAnswers.sort(() => Math.random() - 0.5);
  questionFour.possibleAnswers.sort(() => Math.random() - 0.5);
}

shuffleArray();


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
        // Calls function to create and append image
      //  sendMessage();
      }
  
    }, 1000);
  }

setTime();




 function quizBegins(){
    
  //for (i = 0; i < questionArray.length ; i++) {

    document.getElementById('questionTitle').innerHTML = questionArray[0].thisIsTheQuestion;

    var answerList = document.getElementById("exampleList")
      console.log(questionArray[0])    

        for (g = 0; g < 4 ; g++) {
            
            //document.getElementById('questionTitle').innerHTML = questionArray[i].thisIsTheQuestion;

            var liElement = document.createElement('li');
            

            liElement.innerHTML = questionArray[0].possibleAnswers[g]

            answerList.appendChild(liElement);
        }

            liElement.addEventListener('click', function(event){
              console.log(event.target.textContent)
              console.log(questionArray[0].correctAnswer)
              
              if (event.target.textContent === questionArray[0].correctAnswer) {
                console.log("That's it!");

              } else { console.log("Nope");
              secondsLeft = secondsLeft - 15;
            }


              document.getElementById('exampleList').innerHTML = "";

              document.getElementById('questionTitle').innerHTML = "";
            })
          
            
          // Second cycle

    //       document.getElementById('questionTitle').innerHTML = questionArray[1].thisIsTheQuestion;

    // var answerList = document.getElementById("exampleList")
    //   console.log(questionArray[1])    

    //     for (g = 0; g < 4 ; g++) {
            
    //         //document.getElementById('questionTitle').innerHTML = questionArray[i].thisIsTheQuestion;

    //         var liElement = document.createElement('li');
            

    //         liElement.innerHTML = questionArray[1].possibleAnswers[g]

    //         answerList.appendChild(liElement);
    //     }

    //         liElement.addEventListener('click', function(event){
    //           console.log(event.target.textContent)
    //           console.log(questionArray[1].correctAnswer)
              
    //           if (event.target.textContent === questionArray[1].correctAnswer) {
    //             console.log("That's it!");

    //           } else { console.log("Nope");
    //           secondsLeft = secondsLeft - 15;
    //         }


    //           document.getElementById('exampleList').innerHTML = "";

    //           document.getElementById('questionTitle').innerHTML = "";
    //         })

            // liElement.addEventListener('click', function(event){
            //   var answerList = document.createElement("ul");
            //   holdQuestions.appendChild(answerList);
            //   console.log(event.target)
            //   for (g = 0; g < 4 ; g++) {
                  
            //       document.getElementById('questionTitle').innerHTML = questionArray[1].thisIsTheQuestion;
      
            //       var liElement = document.createElement('li');
      
            //       liElement.innerHTML = questionArray[1].possibleAnswers[g]
      
            //       answerList.appendChild(liElement);

            //       liElement.addEventListener('click', function(event){
              
            //         if (event.target.textContent === questionArray[1].correctAnswer) {
            //           console.log("That's it!");
      
            //         } else { console.log("Nope");
            //         secondsLeft = secondsLeft - 15;
            //       }
            //       //  document.getElementById("main").style.display = 'block'
      
            //       document.getElementById('exampleList').innerHTML = "";
            //       document.getElementById('questionTitle').innerHTML = "";
            //       })

            //       // Third Cycle

                              
            //       console.log(questionArray[2])    

            //           var answerList = document.createElement("ul");
            //           holdQuestions.appendChild(answerList);
            //           console.log(event.target)
            //           for (g = 0; g < 4 ; g++) {
                          
            //               document.getElementById('questionTitle').innerHTML = questionArray[2].thisIsTheQuestion;

            //               var liElement = document.createElement('li');

            //               liElement.innerHTML = questionArray[2].possibleAnswers[g]

            //               answerList.appendChild(liElement);
                          
            //               liElement.addEventListener('click', function(event){
                            
            //                 if (event.target.textContent === questionArray[2].correctAnswer) {
            //                   console.log("That's it!");

            //                 } else { console.log("Nope");
            //                 secondsLeft = secondsLeft - 15;
            //               }
            //         //    document.getElementById("main").style.display = 'block'

            //         document.getElementById('exampleList').innerHTML = "";
            //         document.getElementById('questionTitle').innerHTML = "";
            //           })

            //               // Fourth and final cycle

            //               console.log(questionArray[3])    

            //                 var answerList = document.createElement("ul");
            //                 holdQuestions.appendChild(answerList);
            //                 console.log(event.target)
            //                 for (g = 0; g < 4 ; g++) {
                                
            //                     document.getElementById('questionTitle').innerHTML = questionArray[3].thisIsTheQuestion;

            //                     var liElement = document.createElement('li');

            //                     liElement.innerHTML = questionArray[3].possibleAnswers[g]

            //                     answerList.appendChild(liElement);
                                
            //                     liElement.addEventListener('click', function(event){
                                  
            //                       if (event.target.textContent === questionArray[3].correctAnswer) {
            //                         console.log("That's it!");

            //                       } else { console.log("Nope");
            //                       secondsLeft = secondsLeft - 15;
            //                     }
            //                       document.getElementById("main").style.display = 'block'
            //                       // Will also need to tally final score as seconds left
            //                       document.getElementById('exampleList').innerHTML = "";
            //                       document.getElementById('questionTitle').innerHTML = "";
            //                     })
                    // }
                    // }
                              
            //     }

            // })
          

        }

        // When one liElement is clicked, we need an event listener to hear the click
        // How does the parent react when the li is clicked?
        // Remember event.target
  
      

      startQuizBtn.addEventListener("click",function launchQuiz (event) {
        event.preventDefault();
        shuffleArray();
        document.getElementById("main").style.display = 'none'
        quizBegins();

        // This is where we place the secondsLeft = highscore variable. 
        // Also probably the localstorage?
        document.getElementById("main").style.display = 'block'

       });
