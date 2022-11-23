var distance=parseInt(prompt("enter the distance"));
var time=parseInt(prompt("enter the time"));
  // minutes convert second(5*60)
var times=(time*60);
  // speed=distance/time
var speed=(distance/times);
  // m/sec convert km/hr(18/5)
var total=speed*(18/5);
alert(total);   