var correctAnswer = document.getElementById("correct");
var wrongAnswer = document.getElementById("wrong");
var answerChoice = document.getElementsByTagName("button");
var finalCountdown = document.getElementById("time");
var totalCorrect = 0
var totalWrong = 0


//Timer functions
var startAmount = 60;

function myCountdown() {
  
  var timerInterval= setInterval(function(){
    startAmount--;
    finalCountdown.textContent = startAmount + " seconds until quiz is over!";

    if(startAmount === 0){
      clearInterval(timerInterval);
      alertEndTime();
    }

  }, 1000);
}

function alertEndTime() {
  alert("Time is up! Let us see how you did!")
}




//lets begin button
$(".beginQuizBtn").on("click", function() {
  myCountdown();
  // questions();
});

$(".correct").on("click", function() {
  // alert("You are correct!");
  totalCorrect++;
});

$(".wrong").on("click", function() {
  // alert("You are wrong!");
  startAmount -=5;
});




//displaying one question at a time... 
//array? display a single value in the array, create a fxn (once choice or button is clicked, move to the next value in array)
var questionPull = document.querySelector('.htmlQuestion');
var questionsArray = [
  {question: "What is the square root of 36?",
  correct: "6",
  wrong: ["18", "12", "11"]
},

    // {questionPull,
    //   correctAnswer,
    //   wrongAnswer,
    // },


//   {question: "What is the 4 * 5",
//   correct: "20"
// },
//   {question: "What is the 7 - 5",
//   correct: "2"
// },
//   {question: "What is the 51 / 3",
//   correct: "17"
// },
]



//loop through questions
  for(var i=0; i<questionsArray.length; i++){
      console.log(questionsArray);
  };
    





//storage of scores
var initialsInput = document.querySelector("#inputInitials")
var initialsForm = document.querySelector(".initialForm");
var initialsList = document.querySelector(".pastPlayers");
var submitInitials = document.querySelector(".submitBtn");
var highscoreList = [];

highscore();


function highscore() {
  for (var i=0; i < highscoreList.length; i++) {
    var highscore = highscoreList[i];

    var list = document.createElement("li");
    list.textContent = highscore;
    initialsList.appendChild (list);
  }
}

submitInitials.addEventListener("click", function(e) {
  event.preventDefault();


  var initialsText = initialsInput.value.trim();

  var highscoreFinal = {
    initials: initialsText,
    highscore: totalCorrect
  }

  if (initialsText === "") {
    return;
  }

  highscoreList.push(highscoreFinal);
  initialsInput.value = "";

  for (var i=0; i<highscoreList.length; i++) {
    $('.pastPlayers').append();
  }

  // var

})
