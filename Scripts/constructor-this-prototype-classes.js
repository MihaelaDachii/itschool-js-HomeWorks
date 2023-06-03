// 1. Exercițiul cu constructor functions:
// Creați o constructor function "Masina" care să aibă proprietăți precum "marca", "model" și "anFabricatie". Adăugați o metodă "afiseazaDetalii" la prototipul constructorului care să afișeze toate detaliile mașinii. Extindeți constructorul adăugând o proprietate statică "numarMasini" care să țină evidența numărului total de mașini create. Apoi, creați două instanțe ale clasei și afișați detaliile și numărul total de mașini create.
function Masina(marca, model, anFabricatie) {
    this.marca = marca;
    this.model = model;
    this.anFabricatie = anFabricatie;
  
    Masina.numarMasini++;
  }
  
  Masina.prototype.afiseazaDetalii = function() {
    console.log("Detalii mașină:");
    console.log("Marca:", this.marca);
    console.log("Model:", this.model);
    console.log("An fabricație:", this.anFabricatie);
  };
  
  Masina.numarMasini = 0;
  
  // Creăm două instanțe ale clasei Masina
  const masina1 = new Masina("Audi", "A4", 2019);
  const masina2 = new Masina("BMW", "X5", 2020);
  
  // Afișăm detaliile și numărul total de mașini create
  masina1.afiseazaDetalii();
  masina2.afiseazaDetalii();
  console.log("Număr total de mașini create:", Masina.numarMasini);

  // 2. Exercițiul cu prototype:
 // Extindeți prototipul Array pentru a adăuga o metodă numită "filtrareNrPare" care să returneze un nou array conținând doar numerele pare din array-ul original. Utilizați keyword-ul "this" în implementarea metodei pentru a accesa array-ul curent.
 Array.prototype.filtrarePare = function() {
    return this.filter(function(numar) {
      return numar % 2 === 0;
    });
  };
  
  // Exemplu de utilizare
  const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arrayPare = arrayOriginal.filtrarePare();
  
  console.log("Array original:", arrayOriginal);
  console.log("Numere pare:", arrayPare);

  // 3. Exercițiul cu clase:
  // Creați o clasă "FormaGeometrica" care să aibă o metodă statică "descriere" care afișează o descriere generală a formei geometrice. Extindeți clasa pentru a crea subclase pentru forme geometrice specifice, cum ar fi "Cerc" și "Patrat". În fiecare subclasă, adăugați metode specifice pentru calculul ariei și a perimetrului și utilizați keyword-ul "super" pentru a accesa metodele și proprietățile clasei părinte.
  class FormaGeometrica {
    static descriere() {
      console.log("Aceasta este o formă geometrică.");
    }
  }
  
  class Cerc extends FormaGeometrica {
    constructor(raza) {
      super();
      this.raza = raza;
    }
  
    calculArie() {
      return Math.PI * Math.pow(this.raza, 2);
    }
  
    calculPerimetru() {
      return 2 * Math.PI * this.raza;
    }
  }
  
  class Patrat extends FormaGeometrica {
    constructor(latura) {
      super();
      this.latura = latura;
    }
  
    calculArie() {
      return Math.pow(this.latura, 2);
    }
  
    calculPerimetru() {
      return 4 * this.latura;
    }
  }
  
  // Exemplu de utilizare
  FormaGeometrica.descriere();
  
  const cerc = new Cerc(5);
  console.log("Aria cercului:", cerc.calculArie());
  console.log("Perimetrul cercului:", cerc.calculPerimetru());
  
  const patrat = new Patrat(4);
  console.log("Aria pătratului:", patrat.calculArie());
  console.log("Perimetrul pătratului:", patrat.calculPerimetru());
  