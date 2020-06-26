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




