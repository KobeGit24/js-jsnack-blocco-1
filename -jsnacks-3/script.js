var btn = document.getElementById('btn');
var numero = document.getElementById("numero");

btn.addEventListener('click', function () {
    var firstNumber = parseInt(prompt('inserisci primo numero'));

    if(firstNumber<0) {
        numero.className = 'green';
    } else if (firstNumber>0) {
        numero.className = 'red';
    } else if (firstNumber==0) {
        numero.className = 'blue';
    }
});