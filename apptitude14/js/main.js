var speed=parseInt(prompt("enter the speed"));
var distance=parseInt(prompt("enter the distance"));
// Time=distance/time
// km/hr convert m/sec(5/18)
var convert=speed*(5/18);
var total=(distance/convert);
// sec convert minutes
var minutes=(total/60);
alert(minutes);