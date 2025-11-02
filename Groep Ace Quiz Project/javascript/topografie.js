//----------------------- \\
// --Muziek Knop en Data-- \\
//------------------------ \\
const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('toggle-music');

music.volume = 0.2; // zachter volume

toggleBtn.addEventListener('click', () => {
  if (!music.paused) {
    music.pause();
    toggleBtn.innerHTML = '<img class="sound-icon" src="img/sound-icon-muted.png" alt="muziek aan/uit"> Speel muziek';
  } else {
    music.play();
    toggleBtn.innerHTML = '<img class="sound-icon" src="img/sound-icon.png" alt="muziek aan/uit"> Stop muziek';
  }
});
//------------------------- \\
// --Quiz Data en Vragen!-- \\
//------------------------- \\
const vragen = {
 topografie: [
    { vraag: "Welke rivier stroomt door Parijs?", opties: ["Donau", "Thames", "Seine", "Nijl"], antwoord: 2 },
    { vraag: "Wat is de hoofdstad van Canada?", opties: ["Toronto", "Ottawa", "Vacouver", "Montreal"], antwoord: 1 },
    { vraag: "In welk land ligt de stad Tottori?", opties: ["China", "Zuid-Korea", "Japan", "Noord-Korea"], antwoord: 2 },
    { vraag: " Wat is het grootste land ter wereld qua oppervlakte?", opties: ["Rusland", "China", "Vrenigde Staten", "Zuid-Afrika"], antwoord: 0 },
    { vraag: "Welke berg is de hoogste ter wereld?", opties: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"], antwoord: 3 },
    { vraag: "Wat is de langste rivier van Egypte?", opties: ["Nijl", "Amazone", "Mississippi", "Yangtze"], antwoord: 0 },
    { vraag: "Wat is de hoofdstad van Australia?", opties: ["Canberra", "Brisbane", "Melbourne", "Sydney"], antwoord: 0 },
    { vraag: "In welke land ligt Marrakech?", opties: ["Egypte", "Marrokko", "Griekenland", "Zweden"], antwoord: 1 },
    { vraag: "Welke woestijn is de grootste ter wereld?", opties: ["Gobi", "Sahara", "Alahari", "Atacama"], antwoord: 1 },
    { vraag: "Wat is de hoofdstad van Brazilië?", opties: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], antwoord: 2 },
    { vraag: "Door welk land stroomt de Donau het langst? ", opties: ["Hongarije", "Duitsland", "Oostenrijk", "Roemenië"], antwoord: 3 },
    { vraag: "Welke rivier is de langste van Azië?", opties: ["Mekong", "Indus", "Yangtze", "Ganges"], antwoord: 2 },
    { vraag: "Wat is de administratieve hoofdstad van Zuid-Afrika?", opties: ["Kaapstad", "Johannesburg", "Pretoria", "Durban"], antwoord: 2 },
    { vraag: "Wat is de oude hoofdstad van Japan?", opties: ["Kyoto", "Tokio", "Nagoya", "Tottori"], antwoord: 0 },
    { vraag: "Wat is de grootste stad van India?", opties: ["New Dehli", "Mumbai", "Kolkata", "Bangalore"], antwoord: 1 },
    { vraag: "Welke twee landen delen de grens op het eiland Hispaniola?", opties: ["Cuba en Jamaica", "Haïti en Dominicaanse Republiek", "Puerto Rico en Haïti", "Bahama's en Cuba"], antwoord: 1 },
    { vraag: "Welke zee ligt tussen Saudi-Arabië en Afrika?", opties: ["Arabishe Zee", "Middellandse Zee", "Zwarte Zee", "Rode Zee"], antwoord: 3 },
    { vraag: "Wat is de hoofdstad van Mexico?", opties: ["Guadalajara", "Cancún", "Mecico-Stad", "Monterrey"], antwoord: 2 },
    { vraag: "Welke bergketen loopt langs de westkust van Zuid-Amerika?", opties: ["Andes", "Rocky Mountains", "Himalaya", "Alpen"], antwoord: 0 },
    
  ]
};
    // Hier gaan jullie je vragen in zetten!

;
//---------------- \\
// --Quiz logica-- \\
//---------------- \\

let huidigeCategorie = null;
let huidigeVraag = 0;
let score = 0;

// Dit koppelt variabelen in JS aan elementen in je HTML zodat we de tekst en knoppen kunnen aanpassen als we dat willen!.
const quizEl = document.getElementById("quiz"); 
const vraagEl = document.getElementById("vraag");
const optiesEl = document.getElementById("opties");
const volgendeBtn = document.getElementById("volgende");
const resultaatEl = document.getElementById("resultaat");
const scoreEl = document.getElementById("score");

function startQuiz(categorie) {
  huidigeCategorie = categorie; // sla de gekozen categorie op
  huidigeVraag = 0; //Begint bij de eerste vraag
  score = 0; //Zet de score op 0 en reset het ook weer naar 0

  // Hier verbergt die de startscherm en laat die de vragen zien, of de Quiz
  document.querySelector(".cards-container").style.display = "none";
  quizEl.style.display = "block";

  toonVraag(); //Door dit laad de eerste vraag waardoor de speler kan beginnen aan onze quiz
}

function toonVraag() {
  const vraagData = vragen[huidigeCategorie][huidigeVraag]; //Haalt onze vraag terug door eerst de categorie te checken, en dan welke vraag
  vraagEl.textContent = vraagData.vraag; //Hier wordt de vraag in een h2tje gezet

  optiesEl.innerHTML = ""; // Maakt het leeg zodat de vorige antwoorden verdwijnen

  vraagData.opties.forEach((optie, index) => { //------| Dit zorgt ervoor dat voor elk antwoord een knop wordt gemaakt
    const knop = document.createElement("button");//---| De Knop
    knop.textContent = optie;                     //---| De tekst
    knop.onclick = () => controleerAntwoord(index);//--| Welk nummer dit antwoord heeft: 0, 1, 2 of 3. Javascript begint altijd met 0, niet 1. Let daar op!
    optiesEl.appendChild(knop); //---------------------| Dus, als je op de knop drukt, voort ie een controle uit
  });

  volgendeBtn.style.display = "none"; // De 'Volgende' knop is pas zichtbaar nadat je een antwoord kiest.
}

//Hier vergelijkt ie jouw keuze met het juiste antwoord. Als het klopt gaat de score omhoog met 1
function controleerAntwoord(keuze) {
  const vraagData = vragen[huidigeCategorie][huidigeVraag];
  if (keuze === vraagData.antwoord) {
    score++;
  }

  // Disabled knoppen na de keuze
  Array.from(optiesEl.children).forEach((btn, i) => {
    btn.disabled = true;
    if (i === vraagData.antwoord) { //Maakt de correcte keuze groen en het foute rood
      btn.style.backgroundColor = "lightgreen";
    } else if (i === keuze) {
      btn.style.backgroundColor = "salmon";
    }
  });

  volgendeBtn.style.display = "inline-block"; //Dit zorgt ervoor dat je de 'Volgende' knop te zien krijgt zodat je verder kan
}

function volgendeVraag() {
  huidigeVraag++;
  if (huidigeVraag < vragen[huidigeCategorie].length) { //Als er nog vragen zijn, ga naar het volgende vraag
    toonVraag();
  } else { //Zo niet? Dan ga je naar het eindscherm!
    eindeQuiz();
  }
}

function eindeQuiz() {
  quizEl.style.display = "none"; //Verbergt de quiz 
  resultaatEl.style.display = "block"; //Laat het eind resultaat zien
  scoreEl.textContent = `${score} / ${vragen[huidigeCategorie].length}`; //Laat je eindscore zien met een calculatie: X / Aantal vragen!
}
