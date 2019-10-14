var mainContent = document.querySelector("#main-content")

var title = document.querySelector("#title");
var choices = document.querySelector("#choices")
var yourAnswer = document.querySelector("#log");

var quizBtn = document.querySelector('.buttons')

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

var i = 0;

var score = 0;

var timeLeft = 75;
var z = i + 1
var timeEl = document.getElementById("timeleft")

var timerEl = document.getElementById("timer")
// allowing to go to the next questions and adding click events on the options
function nextQuestion() {

  var buttons = document.querySelectorAll(".buttons")



  buttons.forEach(function (buttons) {


    buttons.addEventListener("click", function () {

      if (buttons.hasAttribute("answer")) {

        score++;

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
          for (j = 0; j < questions[i].choices.length; j++) {
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
        } else {

          endingPage()
        
      }

    } else {

      yourAnswer.textContent = "wrong answer!!!";

      setTimeout(function() {
        yourAnswer.textContent = "";



      }, 1000);
    timeLeft -= 5;
    i++;

    if (i < questions.length){
    title.innerHTML = questions[i].title;
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }
    for (j = 0; j < questions[i].choices.length; j++) {
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
  }  else {

    endingPage()
  }
  }
      
      nextQuestion()


    })

  })


}


function buildQuiz() {

  title.innerHTML = questions[i].title;
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
  //var buttons = document.querySelector(".option-buttons")
  nextQuestion()


}

// this is the starter of the page
title.textContent = "Astronomy Quiz"
choices.innerHTML = "<h2>This is the Astronomy Quiz you been waiting to take all your life!! are you prepared Click the button to get started!!!</h2>"

function endingPage() {
  var option = document.createElement("input")
  var option2 = document.createElement("button")
  title.textContent = "You have successful finished the Quiz";
  option.className = "input"
  option2.textContent = "Click to get your score"
  while (choices.firstChild) {
    choices.removeChild(choices.firstChild);
  }
  
  choices.appendChild(option)
  choices.appendChild(option2)

  option2.addEventListener("click", function(){
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    var finalResult = document.createElement("h3")
    finalResult.textContent = option.value + ":" + score

    choices.appendChild(finalResult)


  })

}



quizBtn.addEventListener("click", function () {

  mainContent.removeChild(quizBtn)
  choices.textContent = ''

  timerEl.textContent = "The Quiz has started..."


  var timeInterval = setInterval(function () {
    timeEl.textContent = "you have " + timeLeft + " seconds remaining";
    timeLeft--;

    if ((timeLeft === -1)||(i == questions.length)) {
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

