// 1. (Data Types, Operators, Strings)
// Scrie un program care primește de la utilizator două cuvinte și le concatenează într-un singur șir de caractere. Apoi, determină lungimea șirului rezultat și afișează în consolă.

var cuvant1 = prompt("Introduceti primul cuvant:");
var cuvant2 = prompt("Introduceti al doilea cuvant:");

var rezultat = cuvant1 + cuvant2;

var lungime = rezultat.length;

console.log("Lungimea șirului rezultat este: " + lungime);

// 2. (Functions, Arrays, Strings)
// Scrie o funcție care primește un șir de caractere și returnează un array conținând fiecare caracter al șirului ca element separat. Apoi, apelează funcția cu un șir introdus de utilizator și afișează array-ul rezultat în consolă.

function separareCaractereSir(sir) {
    var arrayCaractere = [];
  
    for (var i = 0; i < sir.length; i++) {
      arrayCaractere.push(sir[i]);
    }
  
    return arrayCaractere;
  }
  
  var sir = prompt("Introduceti un sir de caractere:");

  var rezultat = separareCaractereSir(sir);
 
  console.log(rezultat);

  // 3. (Loops, Strings)
 // Scrie un program care primește un șir de caractere de la utilizator și afișează fiecare caracter al șirului în ordine inversă, folosind un loop.

var sir = prompt("Introduceti un sir de caractere:");

var sirInversat = "";

for (var i = sir.length - 1; i >= 0; i--) {
  sirInversat += sir[i];
}

console.log("Sirul inversat este: " + sirInversat);

// 4. (Objects, Arrays, Strings)
// Creează un obiect care reprezintă o persoană, având proprietăți precum nume, vârstă și hobburi (reprezentate printr-un array de șiruri de caractere). Apoi, afișează un mesaj în consolă care să conțină informații despre persoană, folosind proprietățile obiectului.
var persoana = {
    nume: "Mihaela",
    varsta: 30,
    hobburi: ["munte", "citit", "shopping"]
  };
  
  var mesaj = "Nume: " + persoana.nume + "\n" +
              "Varsta: " + persoana.varsta + "\n" +
              "Hobburi: " + persoana.hobburi.join(", ");
 
  console.log(mesaj);

  // 5. (For Loop, Strings)
  // Scrie un program care primește un șir de cuvinte separate prin spații de la utilizator. Folosind un loop, afișează fiecare cuvânt în consolă, împreună cu numărul de caractere pe care îl conține.

var sirCuvinte = prompt("Introduceti un sir de cuvinte separate prin spatii:");

var cuvinte = sirCuvinte.split(" ");

for (var i = 0; i < cuvinte.length; i++) {
  var cuvant = cuvinte[i];
  var numarCaractere = cuvant.length;

  console.log(cuvant + " - " + numarCaractere + " caractere");
}

  
  

  
