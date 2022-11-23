var score=parseInt(prompt("enter the score"));
var boundaries=parseInt(prompt("enter the boundaries"));
var six=parseInt(prompt("enter the six"));
var sum=score-(boundaries*4+six*6);
var total=(sum/score*100);
alert(total);