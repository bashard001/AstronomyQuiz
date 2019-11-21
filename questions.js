var mainContent = document.querySelector("#main-content")

var title = document.querySelector("#title");
var choices = document.querySelector("#choices")
var yourAnswer = document.querySelector("#log");

var quizBtn = document.querySelector('.buttons')
var results = [];

//questions list
var questions = [

  {
    title: "How far is the sun from earth?",
    choices: ["92.69 million mi", "96.92 million mi", "92.96 million mi", "95.63 million mi"],
    answer: "96.92 million mi"
  },
  {
    title: "How far is the moon from earth?",
    choices: ["238,900 mi", "283,900 mi", "338,900 mi", "340,000 mi"],
    answer: "238,900 mi"
  },
  {
    title: "what is the shape of the earth?",
    choices: ["flat.", "rectangle.", "spherical.", "non of the above."],
    answer: "spherical."
  },
  {
    title: "which statement is true? ",
    choices: ["The sun is orbiting the earth", "The moon is orbiting the sun", "The sun is orbiting mars", "The earth is orbiting the sun"],
    answer: "The earth is orbiting the sun"
  },
  {
    title: "How many planets does our solar system has?",
    choices: ["8", "12", "6", "10"],
    answer: "8"
  },

];

// allowing to go to the next questions and adding click events on the options
function nextQuestion() {

  var buttons = document.querySelectorAll(".buttons")

  buttons.forEach(function (buttons) {

    buttons.addEventListener("click", function () {
      // this will happen if the user clicked on the right answer
      if (buttons.hasAttribute("answer")) {

        score++;
        let resultN = i + 1;
        results.push(`Q ${resultN}: The answer was Right`)

        yourAnswer.textContent = "great job!!!";

        setTimeout(function () {

          yourAnswer.textContent = "";
        }, 1000)

        timeLeft += 3;
        i++;

        if (i < questions.length) {

          title.innerHTML = questions[i].title;
          while (choices.firstChild) {
            choices.removeChild(choices.firstChild);
          }
          // these comments are example if we dont use the function
          // for (j = 0; j < questions[i].choices.length; j++) {
          //   if (questions[i].choices[j] == questions[i].answer) {
          //     var options = document.createElement('h3')
          //     options.className += "buttons"
          //     options.setAttribute("answer", "right")
          //     options.textContent = questions[i].choices[j];
          //     choices.appendChild(options)


          //   } else {
          //     var options = document.createElement('h3')
          //     options.className += "buttons"
          //     options.textContent = questions[i].choices[j];
          //     choices.appendChild(options)
          //   }
          // }
          // using the options function to add the options to the question
          options()
        } else {

          endingPage()
        }

      } else {
        // this will happen if the user clicked on the wrong answer
        yourAnswer.textContent = "wrong answer!!!";
        let resultN = i + 1;
        results.push(`Q ${resultN}: The answer was Wrong`)

        setTimeout(function () {
          yourAnswer.textContent = "";
        }, 1000);
        timeLeft -= 5;
        i++;

        if (i < questions.length) {
          title.innerHTML = questions[i].title;
          while (choices.firstChild) {
            choices.removeChild(choices.firstChild);
          }
         // using the options function to add the options to the question
          options()
        } else {

          endingPage()
        }
      }
      nextQuestion()
    })

  })
}
// this options function to is add the options to the questions
function options(){
  for (var j = 0; j < questions[i].choices.length; j++) {
    if (questions[i].choices[j] == questions[i].answer) {
      var options = document.createElement('h3')
      options.className += "buttons"
      options.setAttribute("answer", "right")
      options.textContent = questions[i].choices[j];
      choices.appendChild(options)


    } else {
      var options = document.createElement('h3')
      options.className += "buttons"
      options.textContent = questions[i].choices[j];
      choices.appendChild(options)
    }

  }
  

}

function buildQuiz() {

  title.innerHTML = questions[i].title;
  
  options()
  //var buttons = document.querySelector(".option-buttons")
  nextQuestion()


}


var i = 0;

var score = 0;

var timeLeft = 75;
var z = i + 1
var timeEl = document.getElementById("timeleft")

var timerEl = document.getElementById("timer")
var pastScore = document.createElement("h4")
var oldPastScore = localStorage.getItem("yourScore")

var pastScoreValue = localStorage.getItem("scorevalue")
pastScore.innerHTML = "Highest score:" + "<br>" + oldPastScore;

// this is the starter of the page
title.textContent = "Astronomy Quiz"
choices.innerHTML = "<h2>This is the Astronomy Quiz you been waiting to take all your life!! are you prepared Click the button to get started!!!</h2>"

function endingPage() {
  var enterInitials = document.createElement("input")
  var submitInitials = document.createElement("button")
  title.textContent = "You have successful finished the Quiz";
  enterInitials.className = "input"
  enterInitials.setAttribute("placeholder", "enter your initials")
  enterInitials.setAttribute("maxlength", "2")
  submitInitials.textContent = "Click to get your score"
  while (choices.firstChild) {
    choices.removeChild(choices.firstChild);
  }

  choices.appendChild(enterInitials)
  choices.appendChild(submitInitials)

  submitInitials.addEventListener("click", function () {
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    var finalResult = document.createElement("h3")
    var box = document.createElement("fieldset")
    box.className = "field"

    box.innerHTML = "<legend> Scores </legend>"




    finalResult.textContent = enterInitials.value.toUpperCase() + " : " + score;

    var scoreHistory = finalResult.textContent

    choices.appendChild(box)
    finalResult.textContent = "Your score: " + enterInitials.value.toUpperCase() + " : " + score;

    if (oldPastScore == null || oldPastScore.length > 10) {
      choices.firstChild.appendChild(finalResult)
      choices.firstChild.innerHTML += "<hr>"
      choices.firstChild.innerHTML += "<h3>Your answers:</h3>"

    } else {
      choices.firstChild.appendChild(pastScore)
      choices.firstChild.appendChild(finalResult)
      choices.firstChild.innerHTML += "<hr>"
      choices.firstChild.innerHTML += "<h3>Your answers:</h3>"

    }
    for (let v = 0; v < results.length; v++) {
      var rightOrWrong = document.createElement("h3")
      var field = document.querySelector(".field")
      rightOrWrong.textContent = `${results[v]}`
      field.appendChild(rightOrWrong)
    }
    console.log(pastScoreValue)
    choices.innerHTML += "<div style='display: block; margin-top: 10px; text-align: center;'><a  href='index.html' class='buttons'>Try again</div>"

    if (pastScoreValue < score || pastScoreValue == null) {
      localStorage.setItem("yourScore", scoreHistory)

      localStorage.setItem("scorevalue", score)
    }


  })

}



quizBtn.addEventListener("click", function () {

  mainContent.removeChild(quizBtn)
  choices.textContent = ''

  while (timerEl.firstChild) {
    timerEl.removeChild(timerEl.firstChild);
  }
  if (oldPastScore == null || oldPastScore.length > 10) {
    timerEl.innerHTML += "The Quiz has started..."
  } else {
    timerEl.innerHTML += "The Quiz has started..."
    timerEl.appendChild(pastScore)
  }


  var timeInterval = setInterval(function () {
    timeEl.textContent = "you have " + timeLeft + " seconds remaining";
    timeLeft--;

    if ((timeLeft === -1) || (i == questions.length)) {
      timeEl.textContent = "";
      timerEl.textContent = "";

      clearInterval(timeInterval);

    }

  }, 1000);



  if ((timeLeft < 0) || (i == questions.length)) {

    endingPage()

  } else {
    buildQuiz()
  }
})

