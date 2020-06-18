var firstNumber = parseInt(prompt('inserisci primo numero'));
var secondNumber = parseInt(prompt('inserisci secondo numero'));
if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if ( secondNumber > firstNumber) {
    console.log(secondNumber);
} else {
    console.log('i numeri sono uguali'); 
}