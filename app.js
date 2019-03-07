'use strict';


alert('Use a simple yes or no to answer these question');

var questionYes = 'yes';
var questionNo = 'no';

var first_question = function() {
  var question1 = prompt('Is Williams a code Fellow student?');

  question1 = question1.toLowerCase();

  console.log(question1);

  if (question1 === questionYes) {
    alert('Correct');
  } else if (question1 === questionNo) {
    alert('Nah buddy');
  } else {
    alert('Try submitting a -yes- or -no- answer');

  }
};

first_question();



var question2 = function() {
  var sleep = prompt('Did he have a goodnight sleep?');
  sleep = sleep.toLowerCase();

  console.log();


  if (sleep === questionYes) {
    alert('You bet I did');
  } else {
    (sleep === questionNo);
    alert('Nahhhh, I actually did');
  }
};

question2();


var question3 = function() {
  var game = prompt('Is playstion the right console?');
  game = game.toLowerCase();

  if (game === questionYes) {
    alert('LETTTSSSS GOOOO!');
  } else {
    (game === questionNo);
    alert('next question');
  }
};

question3();

var question4 = function() {
  var wife = prompt('Is he married to the hottest chick in the world');
  wife = wife.toLowerCase();

  if (wife === questionYes) {
    alert('Yesssss sir');
  } else {
    (wife === questionNo);
    alert('Quit playing with me');
  }
};
question4();

var question5 = function() {
  var last = prompt('Is learning here fun? ');
  last = last.toLowerCase();
  if (last === questionYes) {
    alert('It really is');
  } else {
    (last === questionNo);
    alert('Get the strap');
  }
};
question5();

// Ask first qestion to user with a prompt//


// question 6, asking the user a question involing a number outcome, but they only get 4 trys//
//we use a for ststement to write properties for the question aka prompt//
//within the for statement, i used a if and else statement to loop the question till they//
//they got it right.//

var question6 = function() {
  for (var i = 0; i < 4; i++) {
    var six = prompt('What day of the month is my birthday?');
    if (six === '24') {
      alert('AYYYY you got it right ::)');
      i = 4;
    } else {
      alert('try again');
    }
  }
};
question6();
// using a console log to send the call the code//


// question 7, asking the user a question with multiple answers//
// Should use a 'while' or 'for' statement, gonna use a 'for' state//
//the for statement is gonna ask when to start, how long, and change//


var question7 = function() {
  for (var i = 0; i < 4; i++) {
    var seven = prompt('What states have I lived in?');
    seven = seven.toLowerCase();
    if (seven === 'florida') {
      alert('Ay thats one, Whats the other?)');

    } else if (seven === 'florida and washington') {
      alert('That\'s RIGHT!, How\'d the hell did you guess that?');
      i = 4;
    } else {
      alert('try again');
    }
  }
};
question7();
