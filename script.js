/* ================= */
/* SECTION GET */
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

const revealText =
document.getElementById("revealText");

const letterMessage =
document.getElementById("letterMessage");


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

setTimeout(()=>{

heart.remove();

},6000);

heart.onclick=()=>{

total++;

counter.innerText=total;

heart.remove();

createSparkle();

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
/* SPARKLE */
/* ================= */

function createSparkle(){

let spark =
document.createElement("div");

spark.innerHTML="✨";

spark.style.position="absolute";

spark.style.left=
Math.random()*100+"%";

spark.style.top=
Math.random()*100+"%";

document
.getElementById("sparkleContainer")

.appendChild(spark);

setTimeout(()=>{

spark.remove();

},900);

}


/* ================= */
/* NEXT TO CLUE */
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
/* PASSCODE */
/* ================= */

const passInput =
document.getElementById("passInput");

const submitBtn =
document.getElementById("submitCodeBtn");

const correctCode="9834";

submitBtn.onclick=()=>{

checkCode();

};

passInput.addEventListener("keypress",

function(e){

if(e.key==="Enter"){

checkCode();

}

});

function checkCode(){

if(passInput.value===correctCode){

passcode.style.display="none";

envelope.style.display="flex";

}

else{

alert("Wrong Passcode");

passInput.value="";

}

}


/* ================= */
/* ENVELOPE */
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

reveal.style.display="flex";

showNextWord();

}

function showNextWord(){

if(index>=words.length){

setTimeout(()=>{

reveal.style.display="none";

letter.style.display="flex";

startTypewriter();

},2000);

return;

}

revealText.innerText=
words[index];

if(words[index]==="1"){

startFireworks();

}

index++;

setTimeout(showNextWord,2000);

}


/* ================= */
/* FIREWORKS */
/* ================= */

function startFireworks(){

setInterval(createFirework,500);

}

function createFirework(){

let fire =
document.createElement("div");

fire.className="firework";

fire.style.left =
Math.random()*100+"vw";

fire.style.top =
Math.random()*50+"vh";

document.body.appendChild(fire);

setTimeout(()=>{

fire.remove();

},1200);

}


/* ================= */
/* TYPEWRITER LETTER */
/* ================= */

function startTypewriter(){

const text =

"Happy Birthday Shafa.\n\n"

+ "I hope today brings you lots of smiles and good moments. "
+ "You deserve to feel appreciated and surrounded by good things.\n\n"

+ "May this new year in your life be filled with success, "
+ "peace of mind, and many small happy moments that make your days better.\n\n"

+ "Honestly, I'm glad I got the chance to know you. "
+ "You're someone who feels calm, kind, and easy to be around.\n\n"

+ "I hope whatever dreams you're working towards "
+ "become easier to reach, step by step.\n\n"

+ "And I hope this small gift can make your day "
+ "just a little bit more special.";

let i=0;

letterMessage.innerHTML="";

function typing(){

if(i<text.length){

letterMessage.innerHTML+=

text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

}
