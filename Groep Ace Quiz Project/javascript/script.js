
//----------------------- \\
// --Muziek en Reset Knop en Data-- \\
//------------------------ \\
const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('toggle-music');
const resetBtn = document.getElementById('reset-button');
const playerName = document.querySelector('#playerName');



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
    { vraag: "Welke land dier kan het langst zonder water?", opties: ["Kameel", "Woestijnrat", "Beerdiertjes", "Addax",], antoowrd: 2 },
    { vraag: "Welke dieren zijn bekend om hun vermogen om te veranderen van kleur?", opties: ["Gifitge kikkers", "lizards", "zeeleeuwen", "Kameleons"], antwoord: 3 },
    { vraag: "Wat eten panda's voornamelijk?", opties: ["Insecten", "Bamboo", "Fruit", "Noten"], antwoord: 1 },
    { vraag: "Hoe noemen we een jongen kangoeroe?", opties: ["Joey", "Cub", "Welf", "Boey"], antwoord: 0 },
    { vraag: "Hoeveel tanden heeft een volwassen haai ongeveer?", opties: ["300", "250", "65", "125"], antwoord: 0 },
    { vraag: "Wat is de IQ van een octupus?", opties: ["165", "70", "100", "225"], antwoord: 2 },
    { vraag: "Welke beer soort is de sterkst?", opties: ["Brownbeer", "Polarbeer", "Blackbeer", "Slothbeer"], antwoord: 1 },
    { vraag: "Wat is de grooste roofdier op land?", opties: ["Leeuw", "Tijger", "Olifant", "Polarbeer"], antoord: 3 }, //We hebben 4 keuzes, dus 0, 1, 2, 3. Javascript code begint altijd met 0, niet met 1. Dus als het de vierde optie is, dan wordt het 3, niet 4.
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
    { vraag: "Wat was de allereerste \"auto\" die op de maan reed (Lunar Roving Vehicle, 1971)?", opties: ["General Motors", "Ford", "NASA zelf", "Chrysler"], antwoord: 0 },
    { vraag: "Welke van deze automerken is oorspronkelijk Japans?", opties: ["Hyundai", "Mitsubishi", "Kia", "Geely"], antwoord: 1 },
    { vraag: "Welke band werd in 1946 voor het eerst geïntroduceerd door Michelin en betekende een revolutie in de auto-industrie?", opties: ["Winterband", "Radiaalband", "Runflatband", "Slickband"], antwoord: 1 },
    { vraag: "Welke Sovjet-auto werd wereldwijd bekend als goedkope export naar Europa tijdens de Koude Oorlog?", opties: ["Trabant", "Moskvitch", "Lada", "Wartburg"], antwoord: 2 },
    { vraag: "De term “coupé” verwijst oorspronkelijk naar:", opties: ["Een sportieve motor", "De aflopende daklijn", "Een lichte carrosserie", "De aanwezigheid van twee deuren"], antwoord: 3 },
    { vraag: "Welke Japanse auto wordt vaak “de eerste serieuze hybride” genoemd?", opties: ["Nissan Micra", "Toyota Prius", "Honda Insight", "Mazda RX-8"], antwoord: 1 },
    { vraag: "Wat was de eerste auto die officieel de 100 km/u doorbrak (1899)?", opties: ["La Jamais Contente", "Mercedes Simplex", "Panhard et Levassor", "Peugeot Type 3"], antwoord: 0 },



  ],
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
const namePlayerBtn = document.querySelector("#playerNameButton")
const namePlayer = document.querySelector("#playerName")

function startQuiz(categorie) {
  huidigeCategorie = categorie;
  huidigeVraag = 0;
  score = 0;


  document.querySelector(".cards-container").style.display = "none";
  quizEl.style.display = "block";

  toonVraag();
}

//Speler Naam button \\

namePlayerBtn.addEventListener('click', function promptUser() {
  const namePlayerBtn = prompt('Kies je gebruikersnaam of verander het')
  namePlayer.textContent = "Naam van speler: " + namePlayerBtn
});

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


