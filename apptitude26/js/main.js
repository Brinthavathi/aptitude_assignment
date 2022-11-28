var a=12;
var b=15;
var c=20;
var d=27;

for( var i=1; i<=a*b*c*d; i++)
{
   if(i%a==0&&i%b==0&&i%c==0&&i%d==0)
   {
   break;
   }
}
alert("LCM="+i);