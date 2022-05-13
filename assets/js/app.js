var cl =console.log;


var getclock=document.getElementById("clock1");

function secondclock(){

var d= new Date();
var h= d.getHours();
var s= d.getSeconds();
var m= d.getMinutes();

var session="am";


if(h > 12){
    session="pm";
    h =h -12;

}


h=smallerthan10(h);
m=smallerthan10(m);
s=smallerthan10(s);


function smallerthan10(t){
    if(t < 10){
         t= "0"+t;
        
    }
        return t;

}
// if(h < 10){
//     h ="0" + h;
// }
// if(m < 10){
//     m = "0" + m;
// }
// if(s < 10){
//     s= "0" + s;
// }


var result1=`${h} : ${m} : ${s} ${session} `;
cl(result1);
getclock.innerHTML=result1;

setTimeout(secondclock,1000);

}
secondclock();



