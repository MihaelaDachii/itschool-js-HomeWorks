// 1.Scrie o funcție care primește un număr și returnează true dacă este par, altfel false.
function estePar(numar) {
  if (numar % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var numarExemplu = 7;
console.log("Numărul", numarExemplu, "este par?", estePar(numarExemplu));



// 2.Scrie o funcție care primește două numere și returnează suma lor inmultita cu 0.1
function sumaInmultita(numar1, numar2) {
  var suma = (numar1 + numar2) * 0.1;
  return suma;
}

var numar1Exemplu = 5;
var numar2Exemplu = 8;
console.log("Suma înmulțită:", sumaInmultita(numar1Exemplu, numar2Exemplu));






// 3.Scrie o functie care calculeaza procentajul dintr-un numar. Procentajul si numarul se introduc ca parametrii.
function calculProcentaj(numar, procentaj) {
  var rezultat = (numar * procentaj) / 100;
  return rezultat;
}

var numarExemplu = 200;
var procentajExemplu = 20;
console.log("Procentajul din", numarExemplu, "este:", calculProcentaj(numarExemplu, procentajExemplu));





// 4.Scrie o funcție care primește trei numere și returnează cel mai mare dintre ele.
function celMaiMare(numar1, numar2, numar3) {
  var celMaiMareNumar = numar1;

  if (numar2 > celMaiMareNumar) {
    celMaiMareNumar = numar2;
  }
  if (numar3 > celMaiMareNumar) {
    celMaiMareNumar = numar3;
  }
  return celMaiMareNumar;
}

var numar1Exemplu = 12;
var numar2Exemplu = 7;
var numar3Exemplu = 15;
console.log("Cel mai mare număr este:", celMaiMare(numar1Exemplu, numar2Exemplu, numar3Exemplu));



// 5. Scrie o funcție care primește un număr și returnează suma tuturor numerelor întregi de la 0 până la acel număr.
function sumaNumerelorIntregi(numar) {
  var suma = 0;
  for (var i = 0; i <= numar; i++) {
    suma += i;
  }
  return suma;
}
var numarExemplu = 10;
console.log("Suma numerelor întregi până la", numarExemplu, "este:", sumaNumerelorIntregi(numarExemplu));


// 6.Scrie o funcție care primește un număr și returnează true dacă este prim, altfel false.
function estePrim(numar) {
  if (numar <= 1) {
    return false;
  }
  for (var i = 2; i < numar; i++) {
    if (numar % i === 0) {
      return false;
    }
  }  
  return true;
}
console.log(estePrim(7)); // true
console.log(estePrim(12)); // false

// 7.Scrie o funcție care primește ca parametru o valoare numerica, iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 0. Funcția trebuie să returneze un mesaj diferit în fiecare caz.
function verificaNumar(numar) {
  if (numar < 0) {
    console.log("Numărul este mai mic decât 0.");
  } else if (numar > 0) {
    console.log("Numărul este mai mare decât 0.");
  } else {
    console.log("Numărul este egal cu 0.");
  }
}

verificaNumar(10); // Numărul este mai mare decât 0.
verificaNumar(-5); // Numărul este mai mic decât 0.
verificaNumar(0); // Numărul este egal cu 0.

// 8.Scrie o functie care afiseaza toate numerele pare dintre un min si maxim dat ca parametru
function afiseazaNumerePare(min, max) {
  for (var i = min; i <= max; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

afiseazaNumerePare(1, 34); 


// 9.Scrie o functie care primeste 3 numere si afiseaza sir crescator cu acele numere.
function afiseazaSirCrescator(numar1, numar2, numar3) {
  var sir = [numar1, numar2, numar3];
  sir.sort(function(a, b) {
    return a - b;
  });
  console.log(sir);
}

afiseazaSirCrescator(3, 1, 2); 


// 10.	Scrie o functie care primeste 3 numere si afiseaza sir descrescator cu acele numere.
function afiseazaSirDescrescator(numar1, numar2, numar3) {
  var sir = [numar1, numar2, numar3];
  sir.sort(function(a, b) {
    return b - a;
  });
  console.log(sir);
}

afiseazaSirDescrescator(3, 1, 2); 

// 11.	Scrie o functie care primeste 1 numar si afiseaza tabla inmultirii pentru acel numar.
function afiseazaTablaInmultirii(numar) {
  for (var i = 1; i <= 10; i++) {
    var rezultat = numar * i;
    console.log(numar + " x " + i + " = " + rezultat);
  }
}

afiseazaTablaInmultirii(3);

// 12.	Scrie o functie care primeste 3 parametrii: nr persoane, locuri disponibile, mese. Aseaza numarul de persoane la mese astfel incat sa nu ramana nici o masa libera, iar la final afiseaza cate locuri libere au ramas (total).
function aseazaPersoaneLaMese(nrPersoane, locuriDisponibile, mese) {
  var locuriTotale = locuriDisponibile * mese;
  var persoanePeMasa = Math.floor(nrPersoane / mese);
  var locuriRamase = locuriTotale - (persoanePeMasa * mese);
  
  console.log("Au fost așezate " + persoanePeMasa + " persoane la fiecare masă.");
  console.log("Au mai rămas " + locuriRamase + " locuri libere.");
}

aseazaPersoaneLaMese(25, 6, 6);

// 13.	Scrie o functie care primeste 1 singur parametru. Acest parametru defineste care dintre functiile de mai sus este apelata. Afiseaza parametru primit, numele functiei apelate precum si raspunsul acelei functii.

function alegeFunctia(functie) {
  console.log("Funcția aleasă: " + functie);

  switch (functie) {
    case "estePar":
      console.log("Răspuns: " + estePar(8));
      break;
    case "sumaInmultita":
      console.log("Răspuns: " + sumaInmultita(5, 3));
      break;
    case "calculeazaProcentaj":
      console.log("Răspuns: " + calculeazaProcentaj(200, 20));
      break;
    case "celMaiMare":
      console.log("Răspuns: " + celMaiMare(15, 27, 9));
      break;
    case "sumaNumerelorIntregi":
      console.log("Răspuns: " + sumaNumerelorIntregi(10));
      break;
    case "estePrim":
      console.log("Răspuns: " + estePrim(17));
      break;
    case "verificareNumar":
      console.log("Răspuns: " + verificareNumar(-5));
      break;
    case "afisareNumerePare":
      afisareNumerePare(1, 10);
      break;
    case "sirCrescator":
      sirCrescator(9, 2, 7);
      break;
    case "sirDescrescator":
      sirDescrescator(4, 1, 6);
      break;
    case "tablaInmultirii":
      tablaInmultirii(7);
      break;
    case "aseazaLaMese":
      aseazaLaMese(30, 100, 4);
      break;
    default:
      console.log("Funcția aleasă nu există.");
  }
}

alegeFunctia("tablaInmultirii");


// 14.	Scrie o functie care primeste anul nasterii si calculeaza varsta in functie de anul curent.
function calculeazaVarsta(anNastere) {
  var anCurent = new Date().getFullYear();
  var varsta = anCurent - anNastere;
  console.log("Anul de naștere: " + anNastere);
  console.log("Anul curent: " + anCurent);
  console.log("Vârsta: " + varsta);
}

calculeazaVarsta(1993);


// 15.	Scrie o functie care calculeaza anii unui animal de companie dat ca parametru (caine sau pisica )
function calculeazaAniAnimal(tipAnimal) {
  var ani;
  if (tipAnimal === "caine") {
    ani = 7;
  } else if (tipAnimal === "pisica") {
    ani = 5;
  } else {
    console.log("Nu se cunoaște durata de viață pentru acest tip de animal.");
    return; // Oprire a funcției dacă tipul de animal nu este cunoscut
  }
  console.log("Tipul animalului: " + tipAnimal);
  console.log("Vârsta maximă estimată în ani: " + ani);
}

calculeazaAniAnimal("caine");

