$(document).ready(function () {

var score =0;
var questions =[
["What year was the World's Columbian Exposition?", 1893],
["How many years did it take to build the World's Columbian Exposition?", 5],
["How many people came to the fair to celebreate Chicago Day?", 716,881]
];

function askQuestion (question){
var answer = prompt(question[0], '');
if (answer == question[1]) {alert('Correct!');
score++;
} else{
	alert ("Sorry.  The correct answer is" + question[1]);
}

}
for (var i=0; i<questions.length; i++) {
	askQuestion(questions[i]);
}

});