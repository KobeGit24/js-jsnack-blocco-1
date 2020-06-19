var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var numRandom = Math.floor(Math.random() * 10);
    var money = document.getElementById('money');
    var frontFace = document.getElementById('front-face');
    var retroFace = document.getElementById('retro-face');
    money.classList.remove('hidden');
    

    if (numRandom % 2 == 1) { 
        frontFace.classList.remove('hidden');
        retroFace.classList.add('hidden');

    } else if (numRandom % 2 == 0) {
        retroFace.classList.remove('hidden');
        frontFace.classList.add('hidden');
    }

    console.log(numRandom);
});