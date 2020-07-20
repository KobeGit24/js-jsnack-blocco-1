//  LIVE CODING 24/06

// var x = prompt("inserisci");

// console.log(++x);

//  LIVE CODING

// for (var i = 0; i <= 1000; i++) {
//     console.log(i);
// }

// for (var i = 1000; i >= 0; i--) {
//     console.log(i);
// }

//  LIVE CODING

// var nomi = ["x","y","z","h","k"];

// for (var i = 0; i < nomi.length; i++) {
//     console.log(nomi[i]);  
// };

//  LIVE CODING

// var dispari = [1,2,3,4,5,6,7];

// for (var i = 0; i < dispari.length; i++) {
//     if (dispari[i] % 2 == 1) {
//         console.log(dispari[i]);
//     }
// };

//LIVE CODING CICLO WHILE!

// var nomi = ["giulio", 'augusto','marco'];

// for (var i = 0; i < nomi.length; i++) {

//     console.log(nomi[i]); 

// };

// var i = 0;

// while (i < nomi.length) {

//     console.log(nomi[i]);
//     i++;
// };

// LIVE CODING

// var nomi = ["flavio", 'giovanni','marco','davide'];

// var nonTrovato = true;
// var i = 0;

// while (nonTrovato && nomi[i] != undefined) {
//     if (nomi[i++] == 'flavio')
//     nonTrovato = false;
// }

//LIVE CODING CICLO DO WHILE

// var numeri = [];

// do {
//     var num = Math.floor(Math.random()*100)+1;
//     console.log(num);
//     numeri.push(num);  
// }   while (num%2);

// console.log(numeri);


// for (var index = 0; index < spesa.length; index++) {
//     console.log(spesa[index]);  
// }

// var i = 0;

// while (i<spesa.length) {
//     console.log(spesa[i]);
//     i++;
// }

// LIVE CODING ESERCIZIO

// var surname = ['Rossi', 'Bianco', 'Esposito', 'Russo', 'Zaccaria'];

// var userSurname = prompt("INSERISCI IL TUO COGNOME");

// surname.push(userSurname);

// surname = surname.sort();

// console.log(surname);

// var debug = true;

// var userPosition = surname.indexOf(userSurname);

// console.log(userPosition + 1);

// for (var i = 0; i < surname.length; i++) { 
    
//     if (surname[i] == userSurname ) {
//         console.log(surname[i]);
//         var debug = false;
//     } 
// }

// LIVE CODING 25/06

// ESERCIZI JSNACK !

// JSnack Blocco 1

// var num1 = parseInt(prompt('inserisci un numero'));
// var num2 = parseInt(prompt('inserisci un numero'));

// if (num1 > num2) {
//    console.log(num1);   
// } else if (num2 > num1) {
//     console.log(num2);   
// } else {
//     console.log('sono uguali!');   
// }

// JSnack Blocco 2

// var word1 = prompt('inserisci una parola');
// var word2 = prompt('inserisci una parola');

// if (word1.length > word2.length) {
//     console.log(word2, word1);   
//  } else {
//      console.log(word1, word2);   
//  }

// JSnack Blocco 3

// var tot = 0;

// for (var i = 0; i < 5; i++) {
//     var numUser = parseInt(prompt('inserisci un numero'));
//     tot+=numUser; 
// }

// console.log(tot);   

// var i = 0;

// while (i<5) {
//      var numUser = parseInt(prompt('inserisci un numero'));
//      tot+=numUser;
//      i++;
// }

// console.log(tot);  

// JSnack Blocco 4

// var userName = prompt("inserisci la tua mail:");

// var surname = ['Rossi', 'Bianco', 'Esposito', 'Russo', 'Verde'];

// var nonEsiste = true;

// for (var i = 0; i < surname.length; i++) {
//     if (surname[i] == userName ) {
//         nonEsiste = false;
//         console.log("WELCOME");
//     } 
// }
 
// if(nonEsiste) {
//     console.log("il suo nome non e' sulla lista");
// }

// METODO ALTERNATIVO

// if (surname.indexOf(userName) === -1) {
//    console.log("il suo nome non e' sulla lista");
// } else {
//    console.log("WELCOME");
// }

// JSnack Blocco 5

// var tot = [];

// for (var i = 0; i < 6; i++) {
//     var numUser = parseInt(prompt('inserisci un numero'));
//     if (numUser%2) {
//         tot.push(numUser); 
//     }
// }

// console.log(tot); 


// ESERCIZIO DEL GIORNO

// for (var i = 0; i < 100; i++) {
//     var numero = i + 1;
//     var three = numero%3==0;
//     var five = numero%5==0;
//     if (three && five) {
//         document.getElementById('numeri').innerHTML += 'FizzBuzz' + " ";  
//         document.getElementById('numeri').className = "red";
//     }
//     else if (three) {
//         document.getElementById('numeri').innerHTML += 'Fizz' + " ";  
//         document.getElementById('numeri').className = "green";      
//     } 
//     else if (five) {
//         document.getElementById('numeri').innerHTML += 'Buzz' + " "; 
//         document.getElementById('numeri').className = "blue";
//     } 
//     else {
//         document.getElementById('numeri').innerHTML += numero + " "; 
//     }
// }


// LIVE CODING 26/06

// JSnack Blocco 6
// var x = parseInt(prompt('inserisci un numero'));

// for (var i = 1; i < x + 1; i++) {
//     console.log(Math.pow(i,3));
// }

// JSnack Blocco 7

// for (var i = 0; i < 10; i++) {
//     console.log(2**i);  
// }

// var numero = 1;
// var exp = 1;
// while (numero < 1000) {
//     console.log(numero);
//     numero = 2**exp;
//     exp++;
// }

// JSnack Blocco 8

// var x = prompt('inserisci un numero di quattro cifre');
// console.log(x);
// var sum = 0;
// for (var i = 1; i < x.length; i++) {
//   sum+= parseInt(x[i]);
// }
// console.log(sum);   


// JSnack Blocco 9

// var sum=0;
// for (var i = 0; i < 10; i++) {
//     var numero = parseInt(prompt('inserisci un numero'));
//     sum += numero;
// }
// console.log('la somma:' + sum);
// console.log('la media:' + sum/10);

// LIVE CODING 30/06

// // Scrivi una funzione che cerchi all'interno di un array di numeri una corrispondenza
// // Se il numero e' presente deve restituire la posizione altrimenti -1

// var array = [1,80,30,55,100];
// var num; // variabile che vogliamo vedere se presente nell'array che puo' assumere qualsiasi valore da noi scelto

// function inArray(array, num) {
// //    controllo numero per numero se ne trovo uno uguale
//     for (var i = 0; i < array.length; i++) {
//         if (array[i]==num) {
//          return i;  
//         }
//     } 
//     return -1;
// }
// // altra possibilita' piu' efficace !
// var i = 0;
// var posizione = -1;
// while (i<array.length && posizione== -1) {
//     if (array[i]==num) {
//         posizione = 1;  
//        }
//     i++;
// }

// console.log(posizione);

// // se vogliamo un contatore che ci dica quante volte la nostra variabile e' presente dentro l'array :
// var count = 0;
// for (var i = 0; i < array.length; i++) {
//     if (array[i]==num) {
//      count++;  
//     }
// }

// // se vogliamo un contatore che ci dica quante volte la nostra variabile e' presente dentro l'array + posizione nell'array:

// var count = 0;
// var miaPosizione = [];
// for (var i = 0; i < array.length; i++) {
//     if (array[i]==num) {
//      count++; 
//      miaPosizione.push(i);
//     }
// }
// console.log(count, miaPosizione);

// // Switch / Case

// var operation = 'somma';
// var num1 = 10;
// var num2 = 2;
// var result = 0;

// switch (operation) {
//     case "somma":
//         result = num1+num2;
//         break;
//     case "sottrazione":
//         result = num1-num2;
//         break;
//     case "moltiplicazione":
//         result = num1*num2;
//         break;
//     case "divisione":
//         result = num1/num2
//         break;

//     default:
//         console.log('operation non valida');
        
//         break;
// }

// console.log(operation, num1, num2, '=', result);

// EVENTI JQUERY LEZIONE 03/07

//keypress(); // e tutti gli eventi key!
// $(document).keydown(function () {
//     var key = event.which;
//     if (key == 39 || key == 100) {
//         nextImg(); 
//     } else if ( key ==  || key == ) {
//         prevImg();
//     }
// })

// function nextImg() {
//     var imgActive = $('.slider-wrapper img.active');
//     imgActive.removeClass('active');
//     var iActive = $('.slider-wrapper i.active');
//     iActive.removeClass('active');
    
//     if(imgActive.hasClass('last') == true) {
//         $('.slider-wrapper img.first').addClass('active');  
//         $('.slider-wrapper i.first').addClass('active');  
//     } else {
//         imgActive.next().addClass('active');
//         iActive.next().addClass('active');
//     }
// }

// function prevImg() {
//     var imgActive = $('.slider-wrapper img.active');
//     imgActive.removeClass('active');
//     var iActive = $('.slider-wrapper i.active');
//     iActive.removeClass('active');
    
//     if(imgActive.hasClass('first') == true) {
//         $('.slider-wrapper img.last').addClass('active');  
//         $('.slider-wrapper i.last').addClass('active');  
//     } else {
//         imgActive.prev().addClass('active');
//         iActive.prev().addClass('active');
//     }
// }

// LIVE CODING 09/07 

// setTimeout() !
//setInterval() !
//clearInterval() !

// var com = [5,6,7];
// alert(com);

// setTimeout(computerNumber, 2000);

// function computerNumber(params) {
//     alert('3 5 7 33 47');
// }

// setInterval(computerNumber, 2000);

// function computerNumber(params) {
//     alert('3 5 7 33 47');
// }

//un alert espone 5 numeri casuali. da li parte un timer di 30 secondi. dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precendentemente. dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuali.
// $(document).ready(function(){
//     var array = [];
//     var user = [];
    
//     while (array.length<5) {
//         var numRan = random(1,100);
//         if (!array.includes(numRan)) {
//           array.push(numRan); 
//         }
//     }
//     console.log(array);
    
//     var time = 5;
//     var control = false;
    
//     var timer = setInterval(function() {  
//         if (time==0 && control==false) {
//             clearInterval(timer);
//             $('#modal').removeClass('active').text('');
//             control=true;
//         }  else if (time==0 && control==true) {   
//             i=0;
//             while (i<5) {
//                 var numUser = parseInt(prompt('inserisci un numero da 1 a 100'))
//                 user.push(numUser);
//                 i++;
//             }
//             console.log(user);   
//         }
//         else {
//             time--;
//             $('#modal').addClass('active').text(array);
//             console.log(time); 
//         }
//     },1000);

//     if (time==0 && control==true) {   
//         i=0;
//         while (i<5) {
//             var numUser = parseInt(prompt('inserisci un numero da 1 a 100'))
//             user.push(numUser);
//             i++;
//         }
//         console.log(user);   
//     }

// });





// var showNum = setInterval(alert(array),2000);
// clearInterval (showNum);

// FUNCTION NUMERI RANDOM

// function random(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// E S E R C I Z I O   B O O L Z A P 

// ex whatsup
//   function clickUtente(){
//     $('.contatto').removeClass('active');
//     $(this).addClass('active');
//     $('.nomeUtentescelto h4').remove();
//     var nome = $('.contatto.active h4').clone();
//     var target = $('.nomeUtentescelto').append(nome);
//     $('.messaggi').removeClass('active');
//     $($('.messaggi').get($(this).index())).addClass('active');
//   }
  

// SOLUZIONE GIOVANNI sul findName
// function nameF() {
//     var input = $(this);
//     var txt = input.val();
//     var contacts = $('.contacts .contact');
//     contacts.each(function(){
//         var contact = $(this);
//         var name = contact.find('.contact-name').text();
//         if (name.toLowerCase().includes(txt.toLowerCase())) {
//             contact.show();
//         } else {
//             contact.hide();
//         }
//     });
// }


//SOLUZIONE GIOVANNI
// function chooseChat2 () {
//     var clicked = $(this);
//     var id = clicked.data('id');
//     var contact = $('.user-item');
//     var conversations = $('.main-chat-user');
//     var selectedConv = $('.main-chat-user[data-id=' + id + ']');

//     contact.removeClass('active');
//     selectedConv.addClass('active');
//     conversations.removeClass('active');
//     selectedConv.addClass('active');
// }
 
//   function init() {
//     $('.contatto').click(clickUtente);
//     ricercaPerNome();
//     $('#barraInvio').keydown(pressInvioMsg);
//   }
//   $(document).ready(init);



//LEZIONE 20/07: I N T R O D U Z I O N E    A G L I    O G G E T T I 

//for-in e' il ciclo per gli oggetti !!


// for (var key in object) {
//     if (object.hasOwnProperty(key)) {
//         var element = object[key];
        
//     }
// }

// function init() {

//     exStudent();
// }

// function exStudent() {
    
//     var student = {
//         'firstname':'Guybrush',
//         'lastname': 'Threepwood',
//         'age': 30
//     };

//     for (var key in student) {
//     if (student.hasOwnProperty(key)) {
//         var element = student[key];

//         console.log(key + '--->' + element);
        
//     }
// }

// }

// $(document).ready(init);

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome (ex 1)
//Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età (ex 2)


function init() {

    var firstname = prompt('inserisci nome');
    var lastname = prompt('inserisci cognome');
    var age = prompt('inserisci eta');

    arrStudents (firstname,lastname,age);
}

function arrStudents (firstname,lastname,age) {

    var obj = {
        'firstname' : firstname,
        'lastname': lastname,
        'age': age
    }

    var array = [
        {
        'firstname':'Guybrush',
        'lastname': 'Threepwood',
        'age': 30
        },
        {
        'firstname':'Pippo',
        'lastname': 'Disney',
        'age': 25
        },
        {
        'firstname':'Pluto',
        'lastname': 'Pixar',
        'age': 20
        }
    ];

    array.push(obj);

    for (var i = 0; i < array.length; i++) {
        console.log(array[i].firstname + ' ' + array[i].lastname + ' ' + array[i].age); // soluzione con dot.notation
        // console.log(array[i]['firstname'] + ' ' + array[i]['lastname'] + ' ' + array[i]['age']); Soluzione equivalente (brachets-notation)!  
    }
}

$(document).ready(init);