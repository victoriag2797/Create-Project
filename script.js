let questionList = ["Pick a NHL jersey:", "Pick a movie:", "Pick a song:", "Pick a person:", "Pick a school subject:", "Pick a quote:", "Pick a long running TV show from the 2010s:", "Pick a cult-classic fandom:", "Pick a fear:", "Pick a season:", "How many siblings do you have?:", "Introvert or Extrovert?:", "Pick an outfit:", "Pick an element:", "Pick a classic NY food:", "Pick one of my brother's favorite movie:", "Pick a random word:"]
let optaList = ["Minnestota Wild", "Dead Poets Society", "Phoebe Bridgers", "Nico Hishcier", "English", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
let optbList = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
let optcList = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
let optdList = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]

const question = document.querySelector('.question-container');
const opta = document.getElementById('opta');
const optb = document.getElementById('optb');
const optc = document.getElementById('optc');
const optd = document.getElementById('optd');

let score = 0;
let questionIndex = 0;
let optaIndex = 0;
let optbIndex = 0;
let optcIndex = 0;
let optdIndex = 0;

opta.addEventListener("click", optaFunct); 

function optaFunct () {
    questionIndex += 1;
    question.textContent = questionList[questionIndex];
    score += 1;
    optaIndex += 1;
    opta.textContent = optaList[optaIndex];
}

optb.addEventListener("click", optbFunct); 

function optbFunct () {
    questionIndex += 1;
    question.textContent = questionList[questionIndex];
    score += 2;
    optbIndex += 1;
    optb.textContent = optbList[optaIndex];
}

optc.addEventListener("click", optcFunct); 

function optcFunct () {
    questionIndex += 1;
    question.textContent = questionList[questionIndex];
    score += 3;
    optcIndex += 1;
    optc.textContent = optcList[optcIndex];
}

optd.addEventListener("click", optdFunct); 

function optdFunct () {
    questionIndex += 1;
    question.textContent = questionList[questionIndex];
    score += 4;
    optdIndex += 1;
    optd.textContent = optdList[optdIndex];
}

if (score = 20) {
    console.log ("I fear you are literally me, exactly. Like we picked the exact same answers.");
  } if (condition2) {
    greeting = "Good evening";
  } else {
    greeting = "Good evening";
}

