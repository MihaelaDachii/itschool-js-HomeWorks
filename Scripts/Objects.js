// Exercițiul 1: Calcularea sumei vârstelor
//Primești un obiect studenti care conține informații despre studenți, inclusiv numele și vârsta lor.
//Calculează suma vârstelor tuturor studenților și returnează rezultatul.

var studenti = {
    student1: { nume: "John", varsta: 20 },
    student2: { nume: "Alice", varsta: 22 },
    student3: { nume: "Mark", varsta: 19 }
  };
  
  function calculareSumaVarstelor(studenti) {
    var sumaVarstelor = 0;
    for (var student in studenti) {
      sumaVarstelor += studenti[student].varsta;
    }
    return sumaVarstelor;
  }
  var suma = calculareSumaVarstelor(studenti);
  console.log(suma); 
  
  // Exercițiul 2: Concatenarea numelor de familie
  //Primești un obiect familii care conține numele tatălui și al mamei pentru fiecare familie.
  //Concatenează numele de familie pentru fiecare familie și returnează rezultatul sub formă de șir de caractere.

  var familii = {
    familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
    familie2: { numeTata: "Radu", numeMama: "Georgescu" }
  };
  
  function concatenareNumeFamilie(familii) {
    var rezultat = "";
  
    for (var familia in familii) {
      var numeTata = familii[familia].numeTata;
      var numeMama = familii[familia].numeMama;
      rezultat += numeTata + " " + numeMama + " ";
    }
  
    return rezultat.trim();
  }
  
  var numeFamilieConcatenat = concatenareNumeFamilie(familii);
  console.log(numeFamilieConcatenat);  

 // Exercițiul 3: Găsirea celui mai mare punctaj
//Primești un obiect elevi care conține informații despre elevi, inclusiv numele și punctajul lor.
//Găsește cel mai mare punctaj dintre toți elevii și returnează rezultatul.

var elevi = {
    elev1: { nume: "Maria", punctaj: 80 },
    elev2: { nume: "Alex", punctaj: 95 },
    elev3: { nume: "Andrei", punctaj: 85 }
  };
  
  function gasesteCelMaiMarePunctaj(elevi) {
    var celMaiMarePunctaj = 0;
  
    for (var elev in elevi) {
      if (elevi.hasOwnProperty(elev)) {
        var punctaj = elevi[elev].punctaj;
        if (punctaj > celMaiMarePunctaj) {
          celMaiMarePunctaj = punctaj;
        }
      }
    }
    return celMaiMarePunctaj;
  }
  
  var rezultat = gasesteCelMaiMarePunctaj(elevi);
  console.log(rezultat); 

//  Exercițiul 4: Verificarea existenței unui email într-un obiect
//Primești un obiect utilizatori care conține informații despre utilizatori, inclusiv numele și adresa de email.
//Verifică dacă o anumită adresă de email există în obiectul utilizatori și returnează true sau false.

var utilizatori = {
    utilizator1: { nume: "John", email: "john@example.com" },
    utilizator2: { nume: "Alice", email: "alice@example.com" }
  };
  
  function verificaEmail(utilizatori, adresaEmail) {
    for (var utilizator in utilizatori) {
      if (utilizatori.hasOwnProperty(utilizator)) {
        var email = utilizatori[utilizator].email;
        if (email === adresaEmail) {
          return true;
        }
      }
    }
    return false;
  }
  var adresaCautata = "john@example.com";
  var rezultat = verificaEmail(utilizatori, adresaCautata);
  console.log(rezultat); 
  
  // Exercițiul 5: Calcularea numărului total de persoane dintr-un obiect
 //Primești un obiect angajati care conține informații despre angajați, inclusiv numele și vârsta lor.
 //Calculează numărul total de persoane din obiectul angajati și returnează rezultatul.

 var angajati = {
    departament1: { nume: "John", varsta: 30 },
    departament2: { nume: "Alice", varsta: 35 },
    departament3: { nume: "Mark", varsta: 28 }
  };
  function numarTotalPersoane(angajati) {
    var numarPersoane = 0;
    
    // Parcurge fiecare departament din obiectul angajati
    for (var departament in angajati) {
      // Verifică dacă obiectul curent este un departament valid
      if (angajati.hasOwnProperty(departament)) {
        // Adaugă 1 la numărul total de persoane pentru fiecare departament
        numarPersoane += 1;
      }
    } 
    return numarPersoane;
  }
  var rezultat = numarTotalPersoane(angajati);
  console.log(rezultat); 

 // Exercițiul 6: Verificarea existenței unui departament într-un obiect
//Primești un obiect companie care conține informații despre departamentele dintr-o companie, inclusiv numele și vechimea lor.
//Verifică dacă un anumit departament există în obiectul companie și returnează true sau false.

var companie = {
    departamentIT: { nume: "John", vechime: 5 },
    departamentVanzari: { nume: "Alice", vechime: 3 }
  };
  
  function verificaDepartament(numeDepartament) {
    return numeDepartament in companie;
  }
  
  // Exemplu de utilizare
  console.log(verificaDepartament('departamentIT')); 
  console.log(verificaDepartament('departamentHR')); 

//  Exercițiul 7: Verificarea existenței unei calificări într-un obiect
//Primești un obiect candidati care conține informații despre candidați, inclusiv numele și o listă de calificări.
//Verifică dacă o anumită calificare există în obiectul candidati și returnează true sau false.

function verificaCalificareExista(candidati, calificare) {
    for (var candidat in candidati) {
      if (candidati.hasOwnProperty(candidat)) {
        var calificariCandidat = candidati[candidat].calificari;
        if (calificariCandidat.includes(calificare)) {
          return true;
        }
      }
    }
    return false;
  }
  
  // Exemplu de utilizare
  var candidati = {
    candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
    candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] }
  };
  var calificareExista = verificaCalificareExista(candidati, "JavaScript");
  console.log(calificareExista); 
  calificareExista = verificaCalificareExista(candidati, "PHP");
  console.log(calificareExista); 
  

  
   

  
  