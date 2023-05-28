// Ex 1 (Data Types, Operators, Arrays):
// Scrie un program care primește de la utilizator trei numere și le adaugă într-un array. Apoi, calculează suma numerelor din array și o afișează în consolă.

var num1 = 100;
var num2 = 105;
var num3 = 107;

// Cream un array si adaugam numerele in el
var numbers = [num1, num2, num3];

// Calculam suma numerelor din array
var sum = numbers[0] + numbers[1] + numbers[2];
console.log("Suma numerelor este: " + sum);

// Ex 2 (If, Operators, Arrays):
// Scrie un program care primește un array de la utilizator și verifică dacă există vreun element negativ în array. Dacă da, afișează un mesaj corespunzător. Altfel, calculează media numerelor din array și o afișează în consolă.
// Primim un array de la utilizator
var array = [13, 72, -12, 100];

// Verificam daca exista vreun element negativ in array
var hasNegative = false;
for (var i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    hasNegative = true;
    break;
  }
}
// Calculam media numerelor din array
var sum = 0;
for (var i = 0; i < array.length; i++) {
  sum += array[i];
}
var average = sum / array.length;
// Afisam mesajul corespunzator sau media numerelor in consola
if (hasNegative) {
  console.log("Exista cel putin un element negativ in array.");
} else {
  console.log("Media numerelor este: " + average);
}

// Ex 3 (Switch, Functions, Arrays):
// Scrie un program care primește un cod de țară de la utilizator și afișează numele țării respective, împreună cu o listă de capitale asociate. Folosește un obiect pentru a mapa codurile de țară la numele țărilor și la array-uri cu capitalele corespunzătoare.
// Obiect cu codurile de tara si capitalele asociate
var tari = {
    RO: ["Romania", ["Bucuresti", "Brasov", "Timisoara"]],
    MD: ["Republica Moldova", ["Chisinau", "Cantemir", "Cahul"]],
    FR: ["Franta", ["Paris", "Marseille", "Lyon"]],
    IT: ["Italia", ["Roma", "Milano", "Napoli"]],
  };
  // Functie pentru afisarea detaliilor tarii
  function afiseazaDetaliiTara(codTara) {
    var tara = tari[codTara];
    if (tara) {
      console.log("Numele tarii este: " + tara[0]);
      console.log("Capitalele asociate sunt: " + tara[1].join(", "));
    } else {
      console.log("Codul de tara introdus nu exista.");
    }
  }
  var codTara = "MD";
  afiseazaDetaliiTara(codTara);
  
  // Ex 4 (For, Arrays, Objects):
  // Scrie un program care primește de la utilizator un array de obiecte, fiecare obiect reprezentând un produs (cu proprietăți precum nume, preț, cantitate). Calculează valoarea totală a produselor (preț x cantitate) și o afișează în consolă.
// Primim un array de obiecte de la utilizator
var products = [
    { nume: "Prune", pret: 8.5, cantitate: 25 },
    { nume: "Mandarine", pret: 9, cantitate: 11 },
    { nume: "Caise", pret: 5, cantitate: 14 },
  ];
  // Calculam valoarea totala a produselor
  var totalValue = 0;
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    totalValue += product.pret * product.cantitate;
  }
  console.log("Valoarea totala a produselor este: " + totalValue);
  
  // Ex 5 (While / Do-While, Functions, Arrays, Objects):
  // Scrie un program care primește de la utilizator un array de obiecte reprezentând studenți (cu proprietăți precum nume, vârstă, note) și calculează media notelor pentru fiecare student. Afișează numele și media fiecărui student în consolă.
// Primim un array de obiecte de la utilizator
var students = [
    { nume: "Mihaela", varsta: 30, note: [10, 9, 9] },
    { nume: "Elena", varsta: 50, note: [9, 9, 8] },
    { nume: "Ion", varsta: 23, note: [7, 4, 10] },
  ];
  // Calcularea mediei notelor unui student
  function calculMedieNote(student) {
    var sum = 0;
    var i = 0;
    while (i < student.note.length) {
      sum += student.note[i];
      i++;
    }
    return sum / student.note.length;
  }
  var i = 0;
  do {
    var student = students[i];
    var media = calculMedieNote(student);
    console.log("Studentul " + student.nume + " are media " + media);
    i++;
  } while (i < students.length);
  