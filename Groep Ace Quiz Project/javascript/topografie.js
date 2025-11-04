console.log("autoKennis Connected")

//----------------------- \\
// --Reset Knop en Data-- \\
//------------------------ \\
const resetBtn = document.querySelector('#reset-button');
const playerName = document.querySelector('#playerName');


//------------------------- \\
// -------Randomizer------- \\
//------------------------- \\

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





//------------------------- \\
// --Quiz Data en Vragen!-- \\
//------------------------- \\
const vragen = {
    topografie: [
    { vraag: "Welk land grenst aan zowel Spanje als Frankrijk?", opties: ["Andorra", "Portugal", "Italië", "België"], antwoord: 0 },
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
}

//---------------- \\
// --Quiz logica-- \\
//---------------- \\

let huidigeCategorie = null;
let huidigeVraag = 0;
let score = 0;

// Dit koppelt variabelen in JS aan elementen in je HTML zodat we de tekst en knoppen kunnen aanpassen als we dat willen!.
const quizEl = document.querySelector("#quiz");
const vraagEl = document.querySelector("#vraag");
const optiesEl = document.querySelector("#opties");
const volgendeBtn = document.querySelector("#volgende");
const resultaatEl = document.querySelector("#resultaat");
const scoreEl = document.querySelector("#score");
const namePlayerBtn = document.querySelector("#playerNameButton")
const namePlayer = document.querySelector("#playerName")

// Functie die wordt aangeroepen bij het klikken op de card

function startQuiz(categorie) {
    huidigeCategorie = categorie;

    huidigeVraag = random(0, indexArray.length);
    const index = indexArray.indexOf(huidigeVraag);
    indexArray.splice(index, 1);
    score = 0;

    document.querySelector(".cards-container").style.display = "none";
    quizEl.style.display = "block";

    toonVraag();

    document.querySelector("#power-up").style.display = "block";
};





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

        // Vraag de correcte antwoord op
        const vraagData = vragen[huidigeCategorie][huidigeVraag];
        const correctAnswer = vraagData.antwoord;

        // Toon de eerste fout antwoord
        let firstWrong = Math.floor(Math.random() * 4);
        while (firstWrong === correctAnswer) {
            firstWrong = Math.floor(Math.random() * 4);
        }

        // Toon de tweede fout antwoord
        let secondWrong = Math.floor(Math.random() * 4);
        while (secondWrong === correctAnswer || secondWrong === firstWrong) {
            secondWrong = Math.floor(Math.random() * 4);
        }

        // Maak de foutieve antwoorden rood
        const buttons = document.querySelectorAll("#opties button");
        buttons[firstWrong].style.backgroundColor = "salmon";
        buttons[secondWrong].style.backgroundColor = "salmon";
    }

}

// Klik event voor 50/50 knop
document.querySelector("#power-up").addEventListener("click", usePowerUp);



//Speler Naam button \\

namePlayerBtn.addEventListener('click', function promptUser() {
    const namePlayerBtn = prompt('Kies je gebruikersnaam of verander het');
    if (namePlayerBtn) {
        namePlayer.textContent = "Welkom bij Auto Kennis, " + namePlayerBtn + "!";
    } else {
        namePlayer.textContent = "Welkom bij Auto Kennis, Speler!";
    }
});

function toonVraag() {
    console.log("Huidige vraag:", huidigeVraag);

    const vraagData = vragen[huidigeCategorie] && vragen[huidigeCategorie][huidigeVraag];

    if (!vraagData) {
        console.error("Geen vraag gevonden!");
        return;
    }

    console.log(vraagData);
    console.log(vraagEl);

    vraagEl.textContent = vraagData.vraag;
    optiesEl.innerHTML = "";

    vraagData.opties.forEach((optie, index) => {
        const knop = document.createElement("button");
        knop.textContent = optie;
        knop.onclick = () => controleerAntwoord(index);
        optiesEl.appendChild(knop);
    });

    // Verberg de 'Volgende' knop totdat een antwoord is geselecteerd
    volgendeBtn.style.display = "none";
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
function volgendeVraag() {
    if (indexArray.length > 0) {
        const randomIndex = random(0, indexArray.length); // Kies random positie in indexArray
        huidigeVraag = indexArray[randomIndex];           // Pak de echte vraag index
        indexArray.splice(randomIndex, 1);                // Verwijder deze index uit indexArray
        toonVraag();
    } else {
        eindeQuiz();
    }
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)

}

function eindeQuiz() {
    quizEl.style.display = "none"; //Verbergt de quiz 
    scoreEl.textContent = `${score} / ${vragen[huidigeCategorie].length}`; //Laat je eindscore zien met een calculatie: X / Aantal vragen!
}
