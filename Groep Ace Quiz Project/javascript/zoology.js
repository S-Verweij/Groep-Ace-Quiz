
// Randomizer array
let indexArray = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
];

const questions = [
    {
        vraag: "Hoveel keren per dag kruisen leeuwen?",
        antwoord: [
            {text: "65", correct: false},
            {text: "50", correct: true},
            {text: "15", correct: false},
            {text: "25", correct: false},
        ]
    },
   
  {
    vraag: "Wie is de snelste landdier?",
    antwoord: [
      { text: "Cheetah", correct: true },
      { text: "Greyhound", correct: false },
      { text: "Eagle", correct: false },
      { text: "Impala", correct: false },
    ]
  },
  {
    vraag: "Welke dier heeft de sterkste biteforce?",
    antwoord: [
      { text: "Leopard", correct: false },
      { text: "Gorilla", correct: false },
      { text: "Tijger", correct: false },
      { text: "Crocodile", correct: true },
    ]
  },
  {
    vraag: "Welke vogel wordt het snelst op het water?",
    antwoord: [
      { text: "Pinguïn", correct: true },
      { text: "Eagle", correct: false },
      { text: "Vulture", correct: false },
      { text: "Seagull", correct: false },
    ]
  },
  {
    vraag: "Welke is de grootste kat van de kattenfamilie?",
    antwoord: [
      { text: "Leeuw", correct: false },
      { text: "Jaguaar", correct: false },
      { text: "Tijger", correct: true },
      { text: "Puma", correct: false },
    ]
  },
  {
    vraag: "Hoeveel magen heeft een koe?",
    antwoord: [
      { text: "4", correct: true },
      { text: "6", correct: false },
      { text: "8", correct: false },
      { text: "10", correct: false },
    ]
  },
  {
    vraag: "Welke slang is het giftigst?",
    antwoord: [
      { text: "Cobra", correct: false },
      { text: "Black mamba", correct: false },
      { text: "Lowland copperhead", correct: false },
      { text: "Inland taipan", correct: true },
    ]
  },
  {
    vraag: "Welke aap is het meest gerelateerd aan mensen?",
    antwoord: [
      { text: "Orangutan", correct: false },
      { text: "Chimpanzee", correct: true },
      { text: "Baboon", correct: false },
      { text: "Gorilla", correct: false },
    ]
  },
  {
    vraag: "Hoe communiceren dolfijnen onder water met elkaar?",
    antwoord: [
      { text: "Signalen", correct: true },
      { text: "Complexe combinaties", correct: false },
      { text: "Telepathie", correct: false },
      { text: "Geluiden", correct: false },
    ]
  },
  {
    vraag: "Welke zoogdieren leggen eieren?",
    antwoord: [
      { text: "Vogelbekdieren", correct: true },
      { text: "Reptielen", correct: false },
      { text: "Amfibieën", correct: false },
      { text: "Katten", correct: false },
    ]
  },
  {
    vraag: "Hoeveel poten heeft een spin?",
    antwoord: [
      { text: "10", correct: false },
      { text: "15", correct: false },
      { text: "12", correct: false },
      { text: "8", correct: true },
    ]
  },
  {
    vraag: "Welke zee is de thuisbasis van de meeste haaien?",
    antwoord: [
      { text: "Indische Zee", correct: true },
      { text: "Atlantische Oceaan", correct: false },
      { text: "Grote Oceaan", correct: false },
      { text: "Poolzee", correct: false },
    ]
  },
  {
    vraag: "Welk landdier kan het langst zonder water?",
    antwoord: [
      { text: "Kameel", correct: false },
      { text: "Woestijnrat", correct: false },
      { text: "Beerdiertjes", correct: true },
      { text: "Addax", correct: false },
    ]
  },
  {
    vraag: "Welke dieren zijn bekend om hun vermogen van kleur te veranderen?",
    antwoord: [
      { text: "Giftige kikkers", correct: false },
      { text: "Lizards", correct: true },
      { text: "Zeeleeuwen", correct: false },
      { text: "Koraal", correct: false },
    ]
  },
  {
    vraag: "Wat eten panda's voornamelijk?",
    antwoord: [
      { text: "Insecten", correct: false },
      { text: "Bamboo", correct: true },
      { text: "Fruit", correct: false },
      { text: "Noten", correct: false },
    ]
  },
  {
    vraag: "Hoe noemen we een jonge kangoeroe?",
    antwoord: [
      { text: "Joey", correct: true },
      { text: "Cub", correct: false },
      { text: "Welf", correct: false },
      { text: "Boey", correct: false },
    ]
  },
  {
    vraag: "Hoeveel tanden heeft een volwassen haai ongeveer?",
    antwoord: [
      { text: "300", correct: true },
      { text: "250", correct: false },
      { text: "65", correct: false },
      { text: "125", correct: false },
    ]
  },
  {
    vraag: "Wat is het IQ van een octopus?",
    antwoord: [
      { text: "165", correct: false },
      { text: "70", correct: false },
      { text: "100", correct: true },
      { text: "225", correct: false },
    ]
  },
  {
    vraag: "Welke beersoort is de sterkst?",
    antwoord: [
      { text: "Brownbear", correct: false },
      { text: "Polarbeer", correct: true },
      { text: "Blackbeer", correct: false },
      { text: "Slothbeer", correct: false },
    ]
  },
  {
    vraag: "Wat is de grootste roofdier op land?",
    antwoord: [
      { text: "Leeuw", correct: false },
      { text: "Tijger", correct: false },
      { text: "Olifant", correct: false },
      { text: "Polarbeer", correct: true },
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    // Kies willekeurige index uit indexArray
const randomIndex = Math.floor(Math.random() * indexArray.length);
const questionIndex = indexArray[randomIndex];
let currentQuestion = questions[questionIndex];

// Verwijder de gebruikte index, zodat die niet opnieuw komt
indexArray.splice(randomIndex, 1);
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.vraag;

    currentQuestion.antwoord.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("Correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correc === "true"){
            button.claasList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

//-----------------------------------\\
//------ EXTRA FUNCTIES -------------\\
//-----------------------------------\\

const resetBtn = document.querySelector('#reset-button');
const playerName = document.querySelector('#playerName');




let huidigeCategorie = null;
let huidigeVraag = 0;
let geschiedenisScore = 0;

const quizEl = document.querySelector("#quiz");
const vraagEl = document.querySelector("#vraag");
const optiesEl = document.querySelector("#opties");
const volgendeBtn = document.querySelector("#volgende");
const resultaatEl = document.querySelector("#resultaat");
const scoreEl = document.querySelector("#score");
const namePlayerBtn = document.querySelector("#playerNameButton");
const namePlayerEl = document.querySelector("#playerName");
const cardPlayerName = document.querySelector(".card");

function startQuizCategorie(categorie) {
    huidigeCategorie = categorie;
    huidigeVraag = random(0, indexArray.length);
    const index = indexArray.indexOf(huidigeVraag);
    indexArray.splice(index, 1);
    zoologyScore = 0;

    document.querySelector(".cards-container").style.display = "none";
    quizEl.style.display = "block";
    document.querySelector("#power-up").style.display = "block";
}

//50/50 power up button

// Check of power-up al gebruikt is

let powerUpUsed = false;


function usePowerUp() {
    {
        // Stop als power-up al gebruikt is
        if (powerUpUsed) return;

        // Markeer power-up als gebruikt
        powerUpUsed = true;

        // Maak knop grijs en niet klikbaar
        const powerButton = document.querySelector("#power-up");
        powerButton.disabled = true;
        powerButton.style.backgroundColor = "grey";

        // ✅ Vraag de correcte antwoord op
        const vraagData = questions[huidigeVraag];
        const correctAnswer = vraagData.antwoord.find(a => a.correct === true);

        // Toon de eerste fout antwoord
        let firstWrong = Math.floor(Math.random() * 4);
        while (vraagData.antwoord[firstWrong] === correctAnswer) {
            firstWrong = Math.floor(Math.random() * 4);
        }

        // Toon de tweede fout antwoord
        let secondWrong = Math.floor(Math.random() * 4);
        while (vraagData.antwoord[secondWrong] === correctAnswer || secondWrong === firstWrong) {
            secondWrong = Math.floor(Math.random() * 4);
        }

        // Maak de foutieve antwoorden rood
        const buttons = document.querySelectorAll("#answer-buttons button");
        buttons[firstWrong].style.backgroundColor = "salmon";
        buttons[secondWrong].style.backgroundColor = "salmon";
    }
}

// Klik event voor 50/50 knop
document.querySelector("#power-up").addEventListener("click", usePowerUp);

// Naam invoeren
namePlayerBtn.addEventListener('click', function promptUser() {
    const name = prompt('Kies je gebruikersnaam of verander het');
    namePlayerEl.textContent = name ? "Welkom bij geschiedenis, " + name + "!" : "Welkom bij geschiedenis, Speler!";
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}