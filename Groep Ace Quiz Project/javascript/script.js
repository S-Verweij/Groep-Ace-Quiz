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
  zoology: [
   { vraag: "", opties: ["", "", "", ""], antwoord: 0 }, //We hebben 4 keuzes, dus 0, 1, 2, 3. Javascript code begint altijd met 0, niet met 1. Dus als het de vierde optie is, dan wordt het 3, niet 4.
    // Hier gaan jullie je vragen in zetten!
  ],
  autoKennis: [
    { vraag: "Er waren meerdere pioniers in de autogeschiedenis, maar wie maakte de auto écht beschikbaar voor de massa?", opties: ["Karl Benz", "Gottlieb Daimler", "Nicolas-Joseph Cugnot", "Henry Ford"], antwoord: 3 },
    { vraag: "Welke auto wordt vaak gezien als de eerste seriematig geproduceerde elektrische auto?", opties: ["GM EV1", "Nissan Leaf", "Tesla Roadster", "BMW i3"], antwoord: 0 },
    { vraag: "Wat was de topsnelheid van de Benz Patent-Motorwagen uit 1885?", opties: ["8 km/u", "16 km/u", "25 km/u", "40 km/u"], antwoord: 1 },
    { vraag: "Welke autofabrikant introduceerde als eerste de veiligheidsriem in driepuntsconfiguratie (zoals we die nu kennen)?", opties: ["Volvo", "Mercedes-Benz", "Ford", "Citroën"], antwoord: 0 },
    { vraag: "Welke motorconfiguratie wordt ook wel een “boxermotor” genoemd?", opties: ["V-Motor", "Lijnmotor", "Horizontaal tegenoverliggende cilinders", "Wankelmotor"], antwoord: 2 },
    { vraag: "In welk jaar werd de eerste snelheidslimiet voor auto’s ingevoerd in Groot-Brittannië?", opties: ["1830", "1865", "1899", "1910"], antwoord: 1 },
    { vraag: "Wat is de belangrijkste reden dat lood vroeger werd toegevoegd aan benzine?", opties: ["Goedkoper produceren", "Betere verbranding", "Vermindering van motorklop", "Minder CO2-uitstoot"], antwoord: 2 },
    { vraag: "Welke fabrikant produceerde de iconische 'Quattro', die baanbrekend was voor vierwielaandrijving in rallysport?", opties: ["Audi", "Lancia", "Subaru", "Peugeot"], antwoord: 0 },
    { vraag: "De term “ABS” staat voor:", opties: ["Automatic Braking System", "Auto Balance Safety", "Air Bag System", "Anti-Blockier-System"], antwoord: 3 },
    { vraag: "Wat was de eerste auto die door Euro NCAP vijf sterren kreeg voor veiligheid?", opties: ["Mercedes A-Klasse", "Renault Laguna", "Volvo S80", "Opel Astra"], antwoord: 1 },
    { vraag: "Wie wordt gezien als de uitvinder van de Wankelmotor?", opties: ["Karl Wankel", "Hans Wankel", "Walter Wankel", "Felix Wankel"], antwoord: 3 },
    { vraag: "Welke fabrikant introduceerde in 1954 de eerste productieauto met brandstofinjectie?", opties: ["Porsche", "Mercedes-Benz", "CHevrolet", "BMW"], antwoord: 1 },
    { vraag: "De Bugatti Veyron brak snelheidsrecords. Welke motor lag erin?", opties: ["V10", "W12", "W16", "V18"], antwoord: 2 },
    { vraag: "Wat was de allereerste ‘auto’ die op de maan reed (Lunar Roving Vehicle, 1971)?", opties: ["General Motors", "Ford", "NASA zelf", "Chrysler"], antwoord: 0 },
    { vraag: "Welke van deze automerken is oorspronkelijk Japans?", opties: ["Hyundai", "Mitsubishi", "Kia", "Geely"], antwoord: 1 },
    { vraag: "Welke band werd in 1946 voor het eerst geïntroduceerd door Michelin en betekende een revolutie in de auto-industrie?", opties: ["Winterband", "Radiaalband", "Runflatband", "Slickband"], antwoord: 1 },
    { vraag: "Welke Sovjet-auto werd wereldwijd bekend als goedkope export naar Europa tijdens de Koude Oorlog?", opties: ["Trabant", "Moskvitch", "Lada", "Wartburg"], antwoord: 2 },
    { vraag: "De term “coupé” verwijst oorspronkelijk naar:", opties: ["Een sportieve motor", "De aflopende daklijn", "Een lichte carrosserie", "De aanwezigheid van twee deuren"], antwoord: 3 },
    { vraag: "Welke Japanse auto wordt vaak “de eerste serieuze hybride” genoemd?", opties: ["Nissan Micra", "Toyota Prius", "Honda Insight", "Mazda RX-8"], antwoord: 1 },
    { vraag: "Wat was de eerste auto die officieel de 100 km/u doorbrak (1899)?", opties: ["La Jamais Contente", "Mercedes Simplex", "Panhard et Levassor", "Peugeot Type 3"], antwoord: 0 },

    

  ],
  geschiedenis: [
    { vraag: "", opties: ["", "", "", ""], antwoord: 0 },
    // Hier gaan jullie je vragen in zetten!
  ],
  topografie: [
    { vraag: "", opties: ["", "", "", ""], antwoord: 0 },
    // Hier gaan jullie je vragen in zetten!
  ]
};
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
