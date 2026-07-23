// ELEMENTS

const envelope = document.getElementById("envelope");

const opening = document.getElementById("opening");

const reveal = document.getElementById("reveal");


// ENVELOPE OPENING

envelope.addEventListener("click", () => {


    envelope.classList.add("open");


    // wait for envelope animation

    setTimeout(() => {


        opening.classList.remove("active");


        reveal.classList.add("active");


        window.scrollTo({
            top:0,
            behavior:"smooth"
        });


    },1800);



});




// COUNTDOWN

const weddingDate =
new Date("May 28, 2027 00:00:00").getTime();



function updateCountdown(){


    const now =
    new Date().getTime();



    const difference =
    weddingDate - now;



    if(difference < 0){

        document.getElementById("days").innerHTML="0";
        document.getElementById("hours").innerHTML="0";
        document.getElementById("minutes").innerHTML="0";
        document.getElementById("seconds").innerHTML="0";

        return;

    }



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



    document.getElementById("days").innerHTML =
    days;


    document.getElementById("hours").innerHTML =
    hours;


    document.getElementById("minutes").innerHTML =
    minutes;


    document.getElementById("seconds").innerHTML =
    seconds;


}



updateCountdown();


setInterval(
    updateCountdown,
    1000
);
