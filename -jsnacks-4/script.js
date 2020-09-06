var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var numRandom = Math.floor(Math.random() * 11);
    var numero = document.getElementById('numero');

    if (numRandom % 2 == 1) {  
        numero.classList.remove('dispari');
    }

    if (numRandom % 2 == 0) {
        numero.classList.remove('pari');
    }

    console.log(numero);
});