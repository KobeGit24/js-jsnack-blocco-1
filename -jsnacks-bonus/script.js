var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var numRandom = Math.floor(Math.random() * 10);
    var frontFace = document.getElementById('front-face');
    var retroFace = document.getElementById('retro-face');
    

    if (numRandom % 2 == 1) {  
        frontFace.classList.remove('hidden');
    } else if (numRandom % 2 == 0) {
        retroFace.classList.remove('hidden');
    }

    console.log(numRandom);
});