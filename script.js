/* ================= */
/* GET SECTION */
/* ================= */

const loading =
document.getElementById("loadingSection");

const intro =
document.getElementById("introSection");

const game =
document.getElementById("gameSection");

const celebration =
document.getElementById("celebrationSection");

const clue =
document.getElementById("clueSection");

const passcode =
document.getElementById("passcodeSection");

const envelope =
document.getElementById("envelopeSection");

const reveal =
document.getElementById("revealSection");

const letter =
document.getElementById("letterSection");


/* ================= */
/* LOADING */
/* ================= */

setTimeout(()=>{

loading.style.display="none";

intro.style.display="flex";

},4000);


/* ================= */
/* START GAME */
/* ================= */

document
.getElementById("startBtn")

.onclick=()=>{

intro.style.display="none";

game.style.display="flex";

spawnHeart();

};


/* ================= */
/* HEART GAME */
/* ================= */

let total=0;

const target=18;

const gameArea =
document.getElementById("gameArea");

const counter =
document.getElementById("heartCount");


function spawnHeart(){

if(total>=target) return;

let heart =
document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left =
Math.random()*85+"vw";

heart.style.animationDuration =
(4+Math.random()*2)+"s";

gameArea.appendChild(heart);


/* auto remove */

setTimeout(()=>{

heart.remove();

},6000);


/* click */

heart.onclick=()=>{

total++;

counter.innerText=total;

heart.remove();

createFlower();


if(total>=target){

setTimeout(()=>{

game.style.display="none";

celebration.style.display="flex";

},600);

return;

}

};


setTimeout(()=>{

spawnHeart();

},850);

}


/* ================= */
/* FLOWER EFFECT */
/* ================= */

function createFlower(){

let flower =
document.createElement("div");

flower.innerHTML="✨";

flower.style.position="absolute";

flower.style.left=
Math.random()*100+"%";

flower.style.top=
Math.random()*100+"%";

document
.getElementById("flowerContainer")

.appendChild(flower);

setTimeout(()=>{

flower.remove();

},900);

}


/* ================= */
/* NEXT CLUE */
/* ================= */

document
.getElementById("nextClueBtn")

.onclick=()=>{

celebration.style.display="none";

clue.style.display="flex";

};


/* ================= */
/* GO PASSCODE */
/* ================= */

document
.getElementById("goPasscodeBtn")

.onclick=()=>{

clue.style.display="none";

passcode.style.display="flex";

};


/* ================= */
/* PASSCODE SYSTEM */
/* ================= */

let input="";

const correct="9834";

const dots=
document.querySelectorAll(".dot");

document.querySelectorAll(".key")

.forEach(key=>{

key.onclick=()=>{

if(key.innerText==="⌫"){

input=input.slice(0,-1);

updateDots();

return;

}

if(input.length<4){

input+=key.innerText;

updateDots();

}


if(input.length===4){

setTimeout(()=>{

if(input===correct){

passcode.style.display="none";

envelope.style.display="flex";

}

else{

alert("Wrong Passcode");

resetDots();

}

},300);

}

};

});


function updateDots(){

dots.forEach((dot,index)=>{

if(index<input.length){

dot.classList.add("active");

}else{

dot.classList.remove("active");

}

});

}


function resetDots(){

input="";

dots.forEach(dot=>{

dot.classList.remove("active");

});

}


/* ================= */
/* ENVELOPE OPEN */
/* ================= */

document
.querySelector(".seal")

.onclick=()=>{

document
.querySelector(".flap")

.style.transform="rotateX(180deg)";


setTimeout(()=>{

envelope.style.display="none";

startReveal();

},900);

};


/* ================= */
/* DIGITAL RAIN */
/* ================= */

function startMaroonRain(){

setInterval(()=>{

createRainLine();

},30);

}


function createRainLine(){

let line =
document.createElement("div");

line.className="rainLine";

line.style.left =
Math.random()*100+"vw";

let height =
40 + Math.random()*80;

line.style.height =
height+"px";

line.style.opacity =
0.4 + Math.random()*0.6;




line.style.animationDuration =
(1.8 + Math.random()*1.5)+"s";

document.body.appendChild(line);

setTimeout(()=>{

line.remove();

},3000);

}


/* ================= */
/* COUNTDOWN */
/* ================= */

const words=[

"3",
"2",
"1",
"HAPPY",
"BIRTHDAY",
"SHAFA"

];

let index=0;


function startReveal(){

startMaroonRain();

reveal.style.display="flex";

showNextWord();

}


function showNextWord(){

if(index>=words.length){

setTimeout(()=>{

reveal.style.display="none";

letter.style.display="flex";

},1200);

return;

}

revealText.innerText=
words[index];

revealText.style.opacity=0;

revealText.style.transform="scale(0.6)";


setTimeout(()=>{

revealText.style.opacity=1;

revealText.style.transform="scale(1)";

},80);


index++;

setTimeout(showNextWord,900);

}