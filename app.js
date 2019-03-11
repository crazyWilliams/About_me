'use strict';
// Welcome to my About me //
//here is a key that alerts you how the question are gonna be answered//

var enter
enter = alert ('Use a simple yes or no to answer these question');

// Here i start asking the usere a few questions of yes or no about me //

// i made a couple of variables so my first five question would have the same answers 'yes' or 'no'//
//question 1,
var question1 = prompt ('Is Williams a code Fellow student?')
question1 = question1.toLowerCase();
var questionYes = "yes";
var questionNo =  "no";

// used 'if' statements to determine if they either answer yes OR no //

if (question1 === questionYes) {
    alert("Correct");
}
else if (question1 === questionNo) {
    alert ("Nah buddy");
}
else {
    alert("Try submitting a -yes- or -no- answer")
    
}
console.log('end of question 1');


// question 2, i ended up using the same if method

var sleep = prompt ('Did he have a goodnight sleep?')
sleep = sleep.toLowerCase();

if (sleep === questionYes){
    alert("You bet I did");
}
else { (sleep === questionNo) 
    alert ("Nahhhh, I actually did");
}
console.log('end of question 2');


// question 3,

 var game = prompt ('Is playstion the right console?') 
 game = game.toLowerCase();

 if (game === questionYes){
    alert("LETTTSSSS GOOOO!");
}
else { (game === questionNo) 
    alert ("next question");
}

console.log('end of question 3');

// question 4,

var wife = prompt ("Is he married to the hottest chick in the world")
wife = wife.toLowerCase();

if (wife === questionYes){
    alert("Yesssss sir");
}
else { (wife === questionNo) 
    alert ("Quit playing with me");
}
console.log('end of question 4');

//question 5,

var last = prompt ('Is learning here fun? ')
last = last.toLowerCase();
if (last === questionYes){
    alert("It really is");
}
else { (last === questionNo) 
    alert ("Get the strap");
}
console.log('end of question 5');


// // Ask first qestion to user with a prompt//


// // question 6, asking the user a question involing a number outcome, but they only get 4 trys//
// //we use a for ststement to write properties for the question aka prompt//
// //within the for statement, i used a if and else statement to loop the question till they got it right.//

for (var i = 0; i < 4; i++){
    var six = prompt('What day of the month is my birthday?');
    if (six === '24' ){
        alert ("AYYYY you got it right ::)");
        break;
    }
    
if (six === '25' || six === '23')
    alert ("sooooo close");
    continue;
    
}
alert (' you took ' + i++ + ' tries ');
alert('I was born the 24th of April');
console.log('end of question 6');


// // using a console log to send the call the code as i go//


// // // question 7, asking the user a question with multiple answers//
// // // Should use a 'while' or 'for' statement, gonna use a 'for' state//
// // //the for statement is gonna ask when to start, how long, and change//

// my variables im going to work with
var answers = ['florida', 'washington', 'philadelphia']; 
var past_correct_guesses = [];
var guesses = 6;
var answered_correct = false;


// my 7th question popping up
while(guesses > 0 && answered_correct === false){
  var state_lived_in = prompt('You have ' + guesses + ' guesses left, answer with a state name, What is a state I have lived in before');
  var guessed_twice = false;

  //check florida twice
  for(var k = 0; k < past_correct_guesses.length; k++){
    if (state_lived_in === past_correct_guesses[k]) { 
      guessed_twice = true;
    }
  }
  //letting user know they answered right
  for(var j = 0; j < answers.length; j++){ 
    if (state_lived_in === answers[j] && guessed_twice === false) {
      alert('nice work, there is three correct answers');
      past_correct_guesses.push(state_lived_in);
      guesses--;
    }
  }
if(guessed_twice){ // for gussing twice
    alert('- 2 for re-typing the same answer');
    guesses -= 2;
  }
  else { //just letting the user to keep going
    alert('keep guessing');
    guesses--;
  }
}
// Giving them the answer at the final result 
alert('it was florida and washington and philadelphia');
console.log('ending question 7');
console.log( 'ending the Williams quiz');

// this is has been fun and hard making this in a week //
// - williams                            //
