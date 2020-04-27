# AstronomyQuiz
To access the site go to:
https://bashard001.github.io/AstronomyQuiz/

* The Quiz proceeds as follows:

  * At the landing page the user is presented with a call-to-action to "Start Quiz."
  
  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * From the start the user has 80 seconds to complete quiz before it ends and be taken to the end page.

  * Answering incorrectly results in a time penalty of 5 seconds to subtracted from time remaining.

  * When time runs out and/or all questions are answered, the user is presented with an input field to enter their initials. Their final score and initials are then highest score is stored in `localStorage`. and It will be shown on the top left corner when they take the quiz again.

  * Lastly the user will be presented with Their score, The highest score, and which question they got right and which they got wrong.

  * Highest score is only updated when someone beats it.
