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
    ["5+", "3-4", "1-2", "Only Child"],
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

//This function loops through four possible answers (0-3), finding the index of the selected answer to add that value to the score
function gradeAnswer(answerIndex) {
    for (let i = 0; i < 4; i++){
        if (i === answerIndex) {
            score += i + 1;
        }
    }
    optFunct();
}

gradeAnswer(answerIndex);

//
function optFunct() {
    if (questionIndex < questionList.length) { 
        questionNumberContainer.textContent = `Question Number: ${questionIndex + 1}`;
        questionContainer.textContent = questionList[questionIndex]; 
        answerContent[0].textContent = optAnswers[questionIndex][0];
        answerContent[1].textContent = optAnswers[questionIndex][1];
        answerContent[2].textContent = optAnswers[questionIndex][2];
        answerContent[3].textContent = optAnswers[questionIndex][3];
        questionIndex += 1;
    } else { //When the question index exceeds the amount of questions -->
        questionSection.textContent = ""; //Set the content in questionSection to nothing
        scoreContainer.innerText = `Your score is ${score}/60`; //Display the score
        //For each range of the score a different result is shown
        if (score === 16) {
            scoreContainer.innerText = "I fear you are literally me, exactly. Like we picked the exact same answers. You're perfect!";
            } else if (score > 16 && score < 25) {
                scoreContainer.innerText = "We have really similar opinions and we would probably get along really well!";
            } else if (score >= 25 && score < 35) {
                scoreContainer.innerText = "We are pretty similar. You have good taste (mostly).";
            } else if (score >= 35 && score < 45) {
                scoreContainer.innerText = "Down the middle. Your opinions are half good, half bad.";
            } else if (score >= 45 && score < 55) {
                scoreContainer.innerText = "We are pretty different. You have some good opinions though (Not a lot).";
            } else if (score >= 55 && score < 59) {
                scoreContainer.innerText = "We're very different. You need to get some better opinions (joking).";
            } else {
                scoreContainer.innerText = "We're exact opposites. We picked the opposite answer every time. You're heavily flawed (joking) (mostly).";
            }
        }
};

optFunct();
