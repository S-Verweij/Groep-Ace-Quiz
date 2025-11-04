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
    zoology: [
    { vraag: "Hoeveel keren per dag kruisen leeuwen?", opties: ["65", "50", "15", "25"], antwoord: 1 },
    { vraag: "Wie is de snelste land dier?", opties: ["cheetah", "greyhound", "eagle", "impala"], antwoord: 0 },
    { vraag: "Welke dier heeft de sterkste biteforce?", opties: ["leopard", "Gorilla", "Tijger", "crodile"], antwoord: 3 },
    { vraag: "Welke vogel wordt het snelst op het water?", opties: ["Pinguin", "Eagle", "Vulture", "Seagulls"], antwoord: 0 },
    { vraag: "Welke is de grooste cat van de cat family?", opties: ["leeuw", "jaugar", "Tijger", "Puma"], antwoord: 2 },
    { vraag: "Hoeveel magen heeft een koe?", opties: ["4", "6", "8", "10"], antwoord: 0 },
    { vraag: "Welke slang is het giftigst?", opties: ["Cobra", "Black mamba", "lowland copperhead", "inland taipan"], antwoord: 3 },
    { vraag: "Welke aap is de most related tot ons mensen?", opties: ["Orangutan", "Chimpanzee", "Baboon", "Gorilla"], antwoord: 1 },
    { vraag: "Hoe cummuniceren dolfijen onder water met elkaar?", opties: ["Signalen", "complexe combinaties", "telepathie", "Geluiden"], antwoord: 1 },
    { vraag: "Welke zoogdieren leggen eieren?", opties: ["Vogelbeldieren", "Reptiles", "Amphians", "Katten"], antwoord: 0 },
    { vraag: "Hoveel poten heeft een spin?", opties: ["10", "15", "12", "8"], antwoord: 3 },
    { vraag: "Welke zee  is de thuisbasis van de meeste haaien?", opties: ["Indische zee", "Atlandtische oceaan", "Grote Oceaan", "Pacific Oceaan",], antwoord: 2 },
    { vraag: "Welke land dier kan het langst zonder water?", opties: ["Kameel", "Woestijnrat", "Beerdiertjes", "Addax",], antwoord: 2 },
    { vraag: "Welke dieren zijn bekend om hun vermogen om te veranderen van kleur?", opties: ["Gifitge kikkers", "lizards", "zeeleeuwen", "Kameleons"], antwoord: 3 },
    { vraag: "Wat eten panda's voornamelijk?", opties: ["Insecten", "Bamboo", "Fruit", "Noten"], antwoord: 1 },
    { vraag: "Hoe noemen we een jongen kangoeroe?", opties: ["Joey", "Cub", "Welf", "Boey"], antwoord: 0 },
    { vraag: "Hoeveel tanden heeft een volwassen haai ongeveer?", opties: ["300", "250", "65", "125"], antwoord: 0 },
    { vraag: "Wat is de IQ van een octupus?", opties: ["165", "70", "100", "225"], antwoord: 2 },
    { vraag: "Welke beer soort is de sterkst?", opties: ["Brownbeer", "Polarbeer", "Blackbeer", "Slothbeer"], antwoord: 1 },
    { vraag: "Wat is de grooste roofdier op land?", opties: ["Leeuw", "Tijger", "Olifant", "Polarbeer"], antwoord: 3 }, //We hebben 4 keuzes, dus 0, 1, 2, 3. Javascript code begint altijd met 0, niet met 1. Dus als het de vierde optie is, dan wordt het 3, niet 4.
    // Hier gaan jullie je vragen in zetten!
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
