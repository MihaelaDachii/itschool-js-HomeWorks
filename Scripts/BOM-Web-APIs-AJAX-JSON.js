// Exercitiul 1. BOM
// Afișează în consolă adresa URL a paginii curente și redirecționează utilizatorul către o altă pagină web după 5 secunde.

console.log(window.location.href);

setTimeout(function() {
  window.location.href = 'https://www.itschool.ro/';
}, 5000);

// Exercitiul 2. JSON
// Definește un obiect JSON care reprezintă un produs cu următoarele proprietăți: nume, preț și disponibilitate. Convertește obiectul JSON într-un șir de caractere JSON apoi parcurge obiectul JSON și afișează proprietățile și valorile sale în consolă.

var produs = {
    nume: 'Smartwatch',
    pret: 2500,
    disponibilitate: true
  };
 
  var jsonString = JSON.stringify(produs);
  
  for (var prop in produs) {
    console.log(prop + ': ' + produs[prop]);
  }
  
// Exercitiul 3. AJAX
// Utilizează AJAX pentru a solicita un fișier text / JSON de la server / API și afișează conținutul acestuia într-un element HTML.

var request = new XMLHttpRequest();
request.open('GET', 'url_fisier', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
   
    document.getElementById('elementId').innerHTML = data;
  } else {
    console.log('Eroare la incarcarea fisierului');
  }
};

request.onerror = function() {
  console.log('Eroare de rețea');
};

request.send();

//Exercitiul 4. Fetch API
// Utilizează Fetch API pentru a solicita un fișier JSON de la un server și afișează datele acestuia în consolă.

fetch('https://www.example.com/data.json')
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Eroare la incarcarea fisierului');
    }
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });


// Exercitiul 5. setInterval și setTimeout:
// Folosind setInterval, afișează în consolă un mesaj care se repetă la fiecare 2 secunde. Apoi, folosind setTimeout, afișează în consolă un mesaj după o întârziere de 3 secunde.
// setInterval
setInterval(function() {
    console.log('Hi, Miha');
  }, 2000);
  
  // setTimeout
  setTimeout(function() {
    console.log('Wow');
  }, 3000);

// Exercitiul 6. Window
// Afișează în consolă lățimea și înălțimea ferestrei browserului utilizând obiectul window. Utilizează metoda prompt pentru a solicita utilizatorului un nume și afișează un mesaj de salut personalizat într-un element HTML.

console.log('Lățime: ' + window.innerWidth);
console.log('Înălțime: ' + window.innerHeight);

var nume = prompt('Introdu numele tău:');

var elementSalut = document.getElementById('elementSalut');
elementSalut.innerHTML = 'Hei, ' + nume + '!';

