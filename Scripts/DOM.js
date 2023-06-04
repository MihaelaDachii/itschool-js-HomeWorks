// Exercițiul 1: Schimbarea culorii de fundal la clic
// Creați un element HTML cu un anumit ID.
// Adăugați un eveniment de clic la acest element. 
// În funcția de tratare a evenimentului de clic, schimbați culoarea de fundal a elementului.

const myElement = document.getElementById('myElement');

myElement.addEventListener('click', function() {
  myElement.style.backgroundColor = 'green';
});

// Exercițiul 2: Adăugarea și eliminarea clasei CSS la trecerea cursorului peste un element
// Creați un element HTML cu un anumit ID.
// Adăugați un eveniment de "mouseover" (trecerea cursorului peste element) la acest element.
// În funcția de tratare a evenimentului de "mouseover", adăugați o clasă CSS la element folosind classList.add.
// Adăugați și un eveniment de "mouseout" (ieșirea cursorului din element) la același element.
// În funcția de tratare a evenimentului de "mouseout", eliminați clasa CSS folosind classList.remove.

const myElement = document.getElementById('myElement');

myElement.addEventListener('mouseover', function() {
  myElement.classList.add('myClass');
});

myElement.addEventListener('mouseout', function() {
  myElement.classList.remove('myClass');
});

// Exercițiul 3: Schimbarea textului unui element la submiterea unui formular
// Creați un formular HTML cu un buton de submit.
// Adăugați un eveniment de "submit" la formular.
// În funcția de tratare a evenimentului de "submit", preveniți comportamentul implicit al formularului folosind event.preventDefault().
// Accesați un element din DOM folosind getElementById.
// Schimbați textul acelui element folosind textContent.

const myForm = document.getElementById('myForm');
const result = document.getElementById('result');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const myInput = document.getElementById('myInput');
  result.textContent = 'Rezultat: ' + myInput.value;
});

// Exercițiul 4: Adăugarea unui element nou la apăsarea unei taste
// Adăugați un eveniment de "keydown" (apăsarea unei taste) la document.
// În funcția de tratare a evenimentului de "keydown", verificați dacă tasta apăsată este Enter (cheia cu codul 13).
// Dacă este apăsată tasta Enter, creați un element nou folosind createElement.
// Adăugați noul element în DOM folosind appendChild.

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      var adresa = document.createElement("p");
      adresa.textContent = "Adresă nouă";
  
      document.body.appendChild(adresa);
    }
  });

// Exercițiul 5: Eliminarea unui element la dublu clic
// Creați un element HTML cu un anumit ID.
// Adăugați un eveniment de "dblclick" (dublu clic) la acest element.
// În funcția de tratare a evenimentului de "dblclick", accesați elementul părinte folosind parentNode.
// Eliminați elementul din DOM folosind removeChild.

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      var adresa = document.createElement("p");
      adresa.textContent = "Adresă nouă";
  
      document.body.appendChild(adresa);
    }
  });
  

