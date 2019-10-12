var mainContent = document.querySelector("#main-content")

var title = document.querySelector("#title");
var choices = document.querySelector("#choices")
var yourAnswer = document.querySelector("#log");

var quizBtn = document.querySelector('button')


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

function nextQuestion() {

  var buttons = document.querySelectorAll(".buttons")

  buttons.forEach(function (buttons) {

    buttons.addEventListener("click", function () {
      i++;
      title.innerHTML = questions[i].title;
      while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
      }
      for (j = 0; j < questions[i].choices.length; j++) {
        if (questions[i].choices[j] == questions[i].answer){
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

      nextQuestion()

      //nextQuestion()
    })
  })


}


function buildQuiz() {

  title.innerHTML = questions[i].title;
  for (var j = 0; j < questions[i].choices.length; j++) {
    if (questions[i].choices[j] == questions[i].answer){
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
  var buttons = document.querySelectorAll(".buttons")

  

  buttons.forEach(function (buttons) {


    buttons.addEventListener("click", function () {

      if (buttons.hasAttribute("answer")){
        i++;
        yourAnswer.textContent = "good job!!!"
      title.innerHTML = questions[i].title;
      while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
      }
      for (j = 0; j < questions[i].choices.length; j++) {
        if (questions[i].choices[j] == questions[i].answer){
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
      nextQuestion()
      } else {
      i++;
      title.innerHTML = questions[i].title;
      while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
      }
      for (j = 0; j < questions[i].choices.length; j++) {
        if (questions[i].choices[j] == questions[i].answer){
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

      nextQuestion()
    })

  })


}

title.textContent = "Astronomy Quiz"
choices.innerHTML = "<h2>This is the Astronomy Quiz you been waiting to take all your life!! are you prepared Click the button to get started!!!</h2>"

quizBtn.addEventListener("click", function () {

  mainContent.removeChild(quizBtn)
  choices.textContent = ''
  buildQuiz()
})

