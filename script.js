const envelope =
document.getElementById("envelope");


const opening =
document.getElementById("opening");


const invitation =
document.getElementById("invitation");



envelope.onclick = function(){

envelope.classList.add("open");


setTimeout(()=>{

opening.classList.remove("active");

invitation.classList.add("active");


},1200);


};




// COUNTDOWN

const weddingDate =
new Date("May 28, 2027 00:00:00").getTime();



function updateCountdown(){


const now =
new Date().getTime();


const difference =
weddingDate-now;



const days =
Math.floor(
difference /
(1000*60*60*24)
);


const hours =
Math.floor(
(difference %
(1000*60*60*24))
/
(1000*60*60)
);



const minutes =
Math.floor(
(difference %
(1000*60*60))
/
(1000*60)
);



const seconds =
Math.floor(
(difference %
(1000*60))
/
1000
);



document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;


}



setInterval(updateCountdown,1000);

updateCountdown();
