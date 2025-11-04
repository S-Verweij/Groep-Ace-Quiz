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
    autoKennis: [
        {
            vraag: "Er waren meerdere pioniers in de autoautokennis, maar wie maakte de auto écht beschikbaar voor de massa?",
            opties: ["Karl Benz", "Gottlieb Daimler", "Nicolas-Joseph Cugnot", "Henry Ford"],
            antwoord: 3
        },
        {
            vraag: "Welke auto wordt vaak gezien als de eerste seriematig geproduceerde elektrische auto?",
            opties: ["GM EV1", "Nissan Leaf", "Tesla Roadster", "BMW i3"],
            antwoord: 0
        },
        {
            vraag: "Wat was de topsnelheid van de Benz Patent-Motorwagen uit 1885?", opties:
                ["8 km/u", "16 km/u", "25 km/u", "40 km/u"], antwoord: 1
        },
        {
            vraag: "Welke autofabrikant introduceerde als eerste de veiligheidsriem in driepuntsconfiguratie (zoals we die nu kennen)?",
            opties: ["Volvo", "Mercedes-Benz", "Ford", "Citroën"],
            antwoord: 0
        },
        {
            vraag: "Welke motorconfiguratie wordt ook wel een “boxermotor” genoemd?",
            opties: ["V-Motor", "Lijnmotor", "Horizontaal tegenoverliggende cilinders", "Wankelmotor"],
            antwoord: 2
        },
        {
            vraag: "In welk jaar werd de eerste snelheidslimiet voor auto’s ingevoerd in Groot-Brittannië?",
            opties: ["1830", "1865", "1899", "1910"],
            antwoord: 1
        },
        {
            vraag: "Wat is de belangrijkste reden dat lood vroeger werd toegevoegd aan benzine?",
            opties: ["Goedkoper produceren", "Betere verbranding", "Vermindering van motorklop", "Minder CO2-uitstoot"],
            antwoord: 2
        },
        {
            vraag: "Welke fabrikant produceerde de iconische 'Quattro', die baanbrekend was voor vierwielaandrijving in rallysport?",
            opties: ["Audi", "Lancia", "Subaru", "Peugeot"],
            antwoord: 0
        },
        {
            vraag: "De term “ABS” staat voor:",
            opties: ["Automatic Braking System", "Auto Balance Safety", "Air Bag System", "Anti-Blockier-System"],
            antwoord: 3
        },
        {
            vraag: "Wat was de eerste auto die door Euro NCAP vijf sterren kreeg voor veiligheid?",
            opties: ["Mercedes A-Klasse", "Renault Laguna", "Volvo S80", "Opel Astra"],
            antwoord: 1
        },
        {
            vraag: "Wie wordt gezien als de uitvinder van de Wankelmotor?",
            opties: ["Karl Wankel", "Hans Wankel", "Walter Wankel", "Felix Wankel"],
            antwoord: 3
        },
        {
            vraag: "Welke fabrikant introduceerde in 1954 de eerste productieauto met brandstofinjectie?",
            opties: ["Porsche", "Mercedes-Benz", "Chevrolet", "BMW"],
            antwoord: 1
        },
        {
            vraag: "De Bugatti Veyron brak snelheidsrecords. Welke motor lag erin?",
            opties: ["V10", "W12", "W16", "V18"],
            antwoord: 2
        },
        {
            vraag: "Wat was de allereerste \"auto\" die op de maan reed (Lunar Roving Vehicle, 1971)?",
            opties: ["General Motors", "Ford", "NASA zelf", "Chrysler"],
            antwoord: 0
        },
        {
            vraag: "Welke van deze automerken is oorspronkelijk Japans?",
            opties: ["Hyundai", "Mitsubishi", "Kia", "Geely"],
            antwoord: 1
        },
        {
            vraag: "Welke band werd in 1946 voor het eerst geïntroduceerd door Michelin en betekende een revolutie in de auto-industrie?",
            opties: ["Winterband", "Radiaalband", "Runflatband", "Slickband"],
            antwoord: 1
        },
        {
            vraag: "Welke Sovjet-auto werd wereldwijd bekend als goedkope export naar Europa tijdens de Koude Oorlog?",
            opties: ["Trabant", "Moskvitch", "Lada", "Wartburg"],
            antwoord: 2
        },
        {
            vraag: "De term “coupé” verwijst oorspronkelijk naar:",
            opties: ["Een sportieve motor", "De aflopende daklijn", "Een lichte carrosserie", "De aanwezigheid van twee deuren"],
            antwoord: 3
        },
        {
            vraag: "Welke Japanse auto wordt vaak “de eerste serieuze hybride” genoemd?",
            opties: ["Nissan Micra", "Toyota Prius", "Honda Insight", "Mazda RX-8"],
            antwoord: 1
        },
        {
            vraag: "Wat was de eerste auto die officieel de 100 km/u doorbrak (1899)?",
            opties: ["La Jamais Contente", "Mercedes Simplex", "Panhard et Levassor", "Peugeot Type 3"],
            antwoord: 0
        },
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
        namePlayer.textContent = "Welkom bij autokennis, " + namePlayerBtn + "!";
    } else {
        namePlayer.textContent = "Welkom bij autokennis, Speler!";
    }
});

cardPlayerName.addEventListener('click', function promptUser() {
    const namePlayerBtn = prompt('Kies je gebruikersnaam of verander het');
    if (namePlayerBtn) {
        namePlayer.textContent = "Welkom bij Auto Kennis, " + namePlayerBtn + "!";
    } else {
        namePlayer.textContent = "Welkom bij Auto Kennis, Speler!";
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
        knop.addEventListener("click", () => controleerAntwoord(index));
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
