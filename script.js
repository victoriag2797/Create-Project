//List of questions
let questionList = [
    "Pick a NHL jersey:", 
    "Pick a movie:", 
    "Pick an artist:", 
    "Pick a person:", 
    "Pick a school subject:",  
    "Pick a long running TV show from the 2010s:", 
    "Pick a cult-classic fandom:", 
    "Pick a fear:", 
    "Pick a season:", 
    "Pick an element:",
    "How many siblings do you have?:", 
    "Introvert or Extrovert?:",  
    "Pick a classic NY food:", 
    "Pick one of my brother's favorite movie:", 
    "Pick a random word:"
];
//List of answers for each question
let optAnswers = [
    ["Seattle Kraken", "St. Louis Blues", "Washington Capitals", "Carolina Hurricanes"], 
    ["Dead Poets Society", "Aftersun", "The Notebook", "Uncut Gems"],
    ["Phoebe Bridgers", "Sufjan Stevens", "Olivia Rodrigo", "Drake"],
    ["Nico Hischier", "Alex Vlasic", "Eric Staal", "Mark Stone"],
    ["English", "History", "Science", "Math"],
    ["House MD", "Supernatural", "Once Upon a Time", "Criminal Minds"], 
    ["Star Wars/Star Trek", "Marvel/DC", "Lord of the Rings", "Harry Potter"],
    ["Death", "Heights", "The Dark", "Spiders"],
    ["Winter", "Autumn", "Spring", "Summer"],
    ["Air", "Water", "Earth", "Fire"],
    ["6+", "4-5", "1-3", "Only Child"],
    ["Ambivert", "Extrovert", "Introvert", "No clue"], 
    ["Pasta", "Pizza", "Water", "Bagel"],
    ["Whiplash", "Inglorious Basterds", "Green Mile", "No Country for Old Men"],
    ["Cadaver", "Epiphany", "Rambunctious", "Wall"],
    
];

//Gets the IDs from the HTML and assigns them values that will not change
const questionContainer = document.getElementById('question-container');
const questionSection = document.getElementById('question-section');
const answerContent = [
    document.getElementById('opta-btn'),
    document.getElementById('optb-btn'),
    document.getElementById('optc-btn'),
    document.getElementById('optd-btn'),
];

//Gets the IDs from the HTML and assigns them values that could change
let scoreContainer = document.getElementById('score-container');
let questionNumberContainer = document.getElementById('question-number');
let score = 0;
let questionIndex = 0;

//
function gradeAnswer(answerIndex) {
    for (let i = 0; i < 4; i++){
        if (i === answerIndex) {
            score += i + 1;
        }
    }
    optFunct();
}


function optFunct() {
    if (questionIndex < questionList.length) {
        questionNumberContainer.textContent = `Question Number: ${
            questionIndex + 1
        }`;
        questionContainer.textContent = questionList[questionIndex];
        answerContent[0].textContent = optAnswers[questionIndex][0];
        answerContent[1].textContent = optAnswers[questionIndex][1];
        answerContent[2].textContent = optAnswers[questionIndex][2];
        answerContent[3].textContent = optAnswers[questionIndex][3];
        questionIndex += 1;
    } else {
        questionSection.textContent = "";
        scoreContainer.innerText = "Your score is ${score}/60";
        if (score == 15) {
            scoreContainer.innerText = "I fear you are literally me, exactly. Like we picked the exact same answers. You're perfect!";
            } else if (score > 15 && score < 25) {
                scoreContainer.innerText = "We have really similar opinions and we would probably get along really well!";
            } else if (score > 24 && score < 34) {
                scoreContainer.innerText = "We are pretty similar. You have good taste (mostly).";
            } else if (score > 34 && score < 44) {
                scoreContainer.innerText = "Down the middle. Your opinions are half good, half bad.";
            } else if (score > 43 && score < 53) {
                scoreContainer.innerText = "We are pretty different. You have some good opinions though (Not a lot).";
            } else if (score > 52 && score < 59) {
                scoreContainer.innerText = "We're very different. You need to get some better opinions.";
            } else (score == 60) {
                scoreContainer.innerText = "We're exact opposites. We picked the opposite answer every time. You're heavily flawed (joking (mostly)).";
            }
        }
};

optFunct();

    
/* 
To Do:
Fix result
Find out about ElseIf
Put in info
Comment code
Slight CSS
*/ 