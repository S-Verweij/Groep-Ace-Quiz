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
    geschiedenis: [
    { vraag: "Wie was de eerste president van de Verenigde Staten?", opties: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], antwoord: 1 },
    { vraag: "In welk jaar begon de tweede wereldoorlog?", opties: ["1937", "1939", "1941", "1945"], antwoord: 1 },
    { vraag: "Welke muur viel in 1989?", opties: ["Chinese Muur", "Muur van Jericho", "Berlijnse Muur", "Hadrian's Wall"], antwoord: 2 },
    { vraag: "Welke Egyptische farao is beroemd vanwege zijn rijkdom en grafmasker?", opties: ["Rames II", "Cleopatra", "Toetanchamon", "Akhenaten"], antwoord: 2 },
    { vraag: "In welk land vond de Franse revolutie plaats?", opties: ["Frankrijk", "Duitsland", "Italie", "spanje"], antwoord: 0 },
    { vraag: "Wie ontdenkte Amerika in 1492?", opties: ["Marco Polo", "Vasco da Gama", "Christofer Columbus", "Ferdinand Magelaan"], antwoord: 2 },
    { vraag: "Wat was de naam van het schip waarop de Pilgrims naar Amerika reisden?", opties: ["Titanic", "Santa Maria", "Mayflower", "Endeavour"], antwoord: 2 },
    { vraag: "Welke stad werd verwoest door de uitbarsting van de Vesuvius in 79 na Christus? ", opties: ["Pompei", "Rome", "Athene", "Carthago"], antwoord: 0 },
    { vraag: "Hoe heette de leider van Nazi-Duitsland tijdens de Tweede Wereldoorlog?", opties: ["Joseph Stalin", "Winston Churchill", "Benito Mussolini", "Adolf Hitler"], antwoord: 3 },
    { vraag: "Wat was de naam van het wereldrijk van Alexander de Grote?", opties: ["Romeinse Rijk", "Perzische Rijk", "Macedonische Rijk", "Ottomaanse Rijk"], antwoord: 2 },
    { vraag: "Wat was de hoofdstad van het Romeinse Rijk?", opties: ["Rome", "Athene", "Constantinopel", "Alexandrie"], antwoord: 0 },
    { vraag: "Wie was koning/koningin van Engeland tijdens de Tweede Wereldoorlog?", opties: ["Elizabeth I", "Victoria", "Elizabeth II", "George VI"], antwoord: 3 },
    { vraag: "In welk jaar werd Nederland bevrijd in de Tweede Wereldoorlog?", opties: ["1944", "1945", "1946", "1947"], antwoord: 1 },
    { vraag: "Wat betekende de Koude Oorlog?", opties: ["Een oorlog in Siberië", "Een conflict zonder direct militair gevecht tussen VS en Sovjet-Unie", "Een burgeroorlog in Rusland", "Een strijd om Antarctica"], antwoord: 1 },
    { vraag: "Wie was de eerste man op de maan?", opties: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], antwoord: 0 },
    { vraag: "In welk jaar werd de Euro ingevoerd als munt in Nederland?", opties: ["1999", "2000", "2001", "2002"], antwoord: 3 },
    { vraag: "Wat was de bijnaam van Napoleon Bonaparte?", opties: ["De IJzeren Hertog", "De Kleine Generaal", "De Zonnekoning", "De Corsicaan"], antwoord: 1 },
    { vraag: "Waar werd Anne Frank geboren?", opties: ["Amsterdam", "Frankfurt", "Parijs", "Berlijn"], antwoord: 1 },
    { vraag: "Welke oorlog vond plaats tussen Noord- en Zuid-Vietnam?", opties: ["Koreaanse Oorlog", "Vietnamoorlog", "Eerste Wereldoorlog", "Cambodjaanse Oorlog"], antwoord: 1 },
    { vraag: "Welke stad was het centrum van het Ottomaanse Rijk?", opties: ["Bagdad", "Istanbul (Constantinopel)", "Mekka", "Damascus"], antwoord: 1 },

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
const cardPlayerName = document.querySelector(".card")

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
        knop.addEventListener("click", ()=> controleerAntwoord(index));
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
    resultaatEl.style.display = "block"
    scoreEl.textContent = `${score} / ${vragen[huidigeCategorie].length}`; //Laat je eindscore zien met een calculatie: X / Aantal vragen!
}
