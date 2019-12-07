let racersArray = [
    ['images/legs.jpg', 'images/Turkey.gif'],
    ['images/burger.jpg', 'images/Hamburger.gif'],
	['images/rooms.jpg', 'images/Mushroom.gif']
];
let racers = document.querySelector("#racers");
console.log(racersArray[0][0])
let started = false;
let start = "";
let startButton = document.querySelector("#startButton");
let restartButton = document.querySelector("#restartButton");
let winner = document.querySelector("#winner");
let redLight = document.querySelector("#redLight");
let greenLight = document.querySelector("#greenLight");
let winnerText = document.querySelector("#winnerText");
let turkey = "";
let burger = "";
let mushrooms = "";


let finishLine = document.documentElement.clientWidth - 200;
restartButton.disabled = true;
function displayRacers() {
    for (let x = 0; x < racersArray.length; x++) {
        racers.innerHTML += "<img class='racingRacers' src ='" + racersArray[x][0] + "'>";
    }



}
displayRacers();
let racingRacers = document.querySelectorAll(".racingRacers");

turkey = racingRacers[0];
burger = racingRacers[1];
mushrooms = racingRacers[2];
console.log(turkey)
startButton.addEventListener("click", function () {
    if (started == false) {
        start = setInterval(startRace, 200);
        started = true;
        turkey.setAttribute("src", racersArray[0][1]);
        burger.setAttribute("src", racersArray[1][1]);
        mushrooms.setAttribute("src", racersArray[2][1]);
        startButton.style.opacity = "0";
        greenLight.style.opacity = "1";
        redLight.style.opacity = "0";
        restartButton.disabled = true;
        startButton.disabled = true;
    }
    


});


let mover1 = 0;
let mover2 = 0;
let mover3 = 0;

function startRace() {



    mover1 += Math.random() * 100;
    mover2 += Math.random() * 100;
    mover3 += Math.random() * 100;
    turkey.style.left = mover1 + "px";
    burger.style.left = mover2 + "px";
    mushrooms.style.left = mover3 + "px";

    console.log(turkey.style.left);
    console.log(burger.style.left);
    console.log(mushrooms.style.left);
    console.log("move");
    if (mover1 >= finishLine || mover2 >= finishLine || mover3 >= finishLine) {
        checker();
    
        
    }
}

function checker(){
    clearInterval(start);
    restartButton.style.opacity = "1";
    console.log("The race has ended");
    winner.style.opacity = 1;
    racers.style.opacity = "0";
    greenLight.style.opacity = "0";
    restartButton.disabled = false;
    winnerText.style.opacity = "1";
    switch (Math.max(mover1, mover2, mover3)) {
        case mover1:
            console.log("1st");
            winnerText.innerHTML = "Turkey Wins!";
            winner.setAttribute("src", "images/legs.jpg");
            break;
        case mover2:
            console.log("2nd");
            winnerText.innerHTML = "Hamburger Wins!";
            winner.setAttribute("src", "images/burger.jpg");
            break;
        case mover3:
            console.log("3rd");
            winnerText.innerHTML = "Mushrooms Wins!";
            winner.setAttribute("src", "images/rooms.jpg");
    }

//     if(mover1 > mover2 && mover1 > mover3){
//         console.log("first won");
//     }
//    else if (mover2 > mover1 && mover2 > mover3) {
//         console.log("second won");
//     }
//     else if (mover3 > mover1 && mover3 > mover2) {
//         console.log("third won");
//     }

}

restartButton.addEventListener("click", function(){
    startButton.disabled = false;
    mover1 = 0;
    mover2 = 0;
    mover3 = 0;
    turkey.style.left = 0 + "px";
    burger.style.left = 0 + "px";
    mushrooms.style.left = 0 + "px";
    racers.style.opacity = "1";
    racers.style.transition = ".8" + "s";
    startButton.style.opacity = "1";
    restartButton.style.opacity = "0";
    winner.style.opacity = "0";
    greenLight.style.opacity = "0";
    redLight.style.opacity = "1";
    winnerText.style.opacity = "0";
    started = false;
    turkey.setAttribute("src", racersArray[0][0]);
    burger.setAttribute("src", racersArray[1][0]);
    mushrooms.setAttribute("src", racersArray[2][0]);

});