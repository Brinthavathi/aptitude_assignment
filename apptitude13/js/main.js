var shares=parseInt(prompt("enter the shares"));
var paying=parseInt(prompt("enter the paying"));
var interest=parseInt(prompt("enter the interest"));
// 9% divident by 100
var sum=(paying/100)*shares;
// 12 is an income on rs 100
var income=(100/interest)*sum;
alert(income);