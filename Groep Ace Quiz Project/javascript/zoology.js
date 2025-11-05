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
const namePlayerBtn = document.querySelector("#playerNameButton")
const playerName = document.querySelector('#playerName');
 
let currentQuestionIndex = 0;
let score = 0;
 
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

namePlayerBtn.addEventListener('click', function promptUser() {
    const namePlayerBtn = prompt('Kies je gebruikersnaam of verander het');
    if (namePlayerBtn) {
        namePlayer.textContent = "Welkom bij geschiedenis, " + namePlayerBtn + "!";
    } else {
        namePlayer.textContent = "Welkom bij geschiedenis, Speler!";
    }
});

cardPlayerName.addEventListener('click', function promptUser() {
    const namePlayerBtn = prompt('Kies je gebruikersnaam of verander het');
    if (namePlayerBtn) {
        namePlayer.textContent = "Welkom bij geschiedenis, " + namePlayerBtn + "!";
    } else {
        namePlayer.textContent = "Welkom bij geschiedenis, Speler!";
    }
    console.log("dfsdrgsdr")
});
 
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    vraag;
 
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
 
function resetState(e){
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
            button.classList.add("correct");
        }
        button.disabled= true
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions. lenght}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.dislay = "block";
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
})
 
 
 
startQuiz();
 