var distance=parseInt(prompt("enter the downstream and upstream distance"));
var dsTime=parseInt(prompt("enter the hour"));
var usTime=parseInt(prompt("enter the hour"));
var a=(distance/dsTime);
var b=(distance/usTime);
// var formula=(1/2(a+b));
var total=1/2*(a+b);
alert(total);


