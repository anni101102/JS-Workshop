//1. Erstelle zwei beliebige Kunden als Objekt. Die Objekte können beliebig benannt werden. Dabei sollen die Kunden folgende 
//Schlüssel besitzen: Nachname, Vorname, Alter (Number), Kontostand (Number) und Laufzeit (Number). Die Werte sind frei wählbar. 



//2. Hier soll eine Funktion erstellt werden, um zu überprüfen ob die Kunden einen Kredit bekommen. Die Voraussetzung dabei sind:
//      1. Der Kunde ist mindestens 18 Jahre alt.
//      2. Der Kunde hat einen Kontostand über 10000.
//      3. Der Kunde hat eine Laufzeit über 3 Jahre.
//Bei der Funktion soll dann das Objekt übergeben werden.

// Hier sollen dann Variablen erstellt werden, die das Ergebnis der Kreditprüfung für die 2 Kunden speichert.


// Danach sollen die Ergebnisse in der Konsole angezeigt werden.



//3. Klassen
//3.1.  Erstelle eine neue Klasse Kunde
//Werte: Nachname, Vorname, Alter, Kontostand und Laufzeit
//Methode: kreditPruefen, kundenInfos(soll alle Werte des Kunden ausgeben)


//3.2. Lege ein neues Objekt der Klasse Kunde an


//3.3. Rufe für das neue Objekt beide Methoden auf und gebe es jeweils auf der Konsole aus



//4. DOM & Events
//4.1 Wenn man auf den Button Kundeninfo (mit der ID="idKundeninfo") klickt, soll das aktuelle Datum mit dem Kontostand 
//des angelegten Kundens in dem Container (mit der ID="idKontostandAnzeige") angezeigt werden.
// ==> 16.05.2024 Kontostand: 28000€




















const kreditInfo= 'Kredite werden erst bei einer Laufzeit von über 3 Jahren und einem Kontostand von über 5000€ vergeben.'

// Finde das HTML-Element mit der ID "idButton" und weise es der Variable "button" zu
const button = document.getElementById("idButton");

// Füge einen Eventlistener hinzu, der auf das "click"-Ereignis des Buttons reagiert und die Funktion "geklicket" aufruft
button.addEventListener("click", kreditDaten);

//Alternativ
//document.getElementById("idButton").onclick = kreditDaten;

function kreditDaten(){
  // Hole den Betragseingabefeld und den eingegebenen Betrag
  const eingabeFeld = document.getElementById("idEuro");
  const eingabe = parseFloat(eingabeFeld.value); // Konvertiere den Eingabewert in eine Zahl

  // Hole das Laufzeit-Eingabefeld und die eingegebene Laufzeit
  const laufzeitFeld = document.getElementById("idLaufzeit");
  const laufzeit = parseFloat(laufzeitFeld.value); // Konvertiere den Eingabewert in eine Zahl

  // Überprüfe, ob der eingegebene Betrag gültig ist
  if (isNaN(eingabe) || eingabe <= 0) {
    alert("Bitte geben Sie einen gültigen Betrag ein.");
    return;
  }


  // Überprüfe, ob die eingegebene Laufzeit gültig ist
  if (isNaN(laufzeit) || laufzeit <= 0) {
    alert("Bitte geben Sie eine gültige Laufzeit ein.");
    return;
  }

  // Finde den entsprechenden Zinssatz basierend auf der eingegebenen Laufzeit
  let zinssatz;
  if (laufzeit < 3) {
    zinssatz = 2.0;
  } else if (laufzeit < 6) {
    zinssatz = 2.5;
  } else if (laufzeit < 10) {
    zinssatz = 3.0;
  } else {
    zinssatz = 3.5;
  }

  // Berechne den Zins
  const zins = eingabe * (zinssatz / 100);

  // Berechne neuen Kontostand mit Zinsen
  const kontostandMitZins = eingabe + zins;

  // Zeige den neuen Kontostand im Ausgabefeld an
  const ausgabeFeld = document.getElementById("idAusgabe");
  ausgabeFeld.value = `Neuer Kontostand: ${kontostandMitZins.toFixed(2)} €`;
  ausgabeFeld.size = ausgabeFeld.value.length;

  // Zeige den Zins im Ausgabefeld für den Zins an
  const zinsAusgabeFeld = document.getElementById("idZinsAusgabe");
  zinsAusgabeFeld.value = `Zins: ${zins.toFixed(2)} €`;
  zinsAusgabeFeld.size = zinsAusgabeFeld.value.length;
  

  
  // Funktion zum Überprüfen, ob ein Kunde einen Kredit bekommt
  function kreditGewaehrt(eingabe, laufzeit) {
    // Überprüfen ob der Kontostand des Kunden über 5000 ist
    if (laufzeit > 3) {
        // Überprüfen ob die Laufzeit des Kunden größer als 3 ist
        if (eingabe > 5000) {
            // Kredit wird gewährt
            return "Der Kredit wird gewährt.";
        } else {
            // Kredit wird abgelehnt
            return "Der Kredit wird abgelehnt.";
        }
    } else {
        // Kredit wird abgelehnt
        return "Der Kredit wird abgelehnt.";
    }
  }
  // Rufe die Funktion zum Überprüfen, ob ein Kunde einen Kredit bekommt auf
  
  const kreditEntscheidung = kreditGewaehrt(eingabe, laufzeit);
  
  
  // Zeige den Kreditentscheid im Ausgabefeld an
  const kreditAusgabeFeld = document.getElementById("idKreditAusgabe");
  kreditAusgabeFeld.value = kreditEntscheidung;
  kreditAusgabeFeld.size = kreditAusgabeFeld.value.length;
}


function kundeHinzufuegen(nachname, vorname, kontostand, laufzeit) {
  // Erstelle eine neue Zeile für den Kunden
  const reihe = document.createElement('tr');

  // Erstelle eine neue Zelle für den Nachnamen
  const nachnameCell = document.createElement('td');
  nachnameCell.textContent = nachname;
  reihe.appendChild(nachnameCell);

  // Erstelle eine neue Zelle für den Vornamen
  const vornameCell = document.createElement('td');
  vornameCell.textContent = vorname;
  reihe.appendChild(vornameCell);

  // Erstelle eine neue Zelle für den Kontostand
  const kontostandCell = document.createElement('td');
  kontostandCell.textContent = kontostand;
  reihe.appendChild(kontostandCell);

  // Erstelle eine neue Zelle für die Dauer
  const laufzeitCell = document.createElement('td');
  laufzeitCell.textContent = laufzeit;
  reihe.appendChild(laufzeitCell);

  

  // Füge die neue Zeile zur Tabelle hinzu
  const table = document.getElementById('kundentabelle');
  table.tBodies[0].appendChild(reihe);
}

const form = document.getElementById('kundenangaben');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Hole die Werte aus dem Formular
  const nachname = document.getElementById('nachname').value;
  const vorname = document.getElementById('vorname').value;
  const kontostand = document.getElementById('kontostand').value;
  const laufzeit = document.getElementById('laufzeit').value;

  // Rufe die addCustomer-Funktion mit den Werten auf
  kundeHinzufuegen(nachname, vorname, kontostand, laufzeit);

  // Leere die Eingabefelder
  document.getElementById('nachname').value ='';
  document.getElementById('vorname').value = '';
  document.getElementById('kontostand').value = '';
  document.getElementById('laufzeit').value = '';
});




