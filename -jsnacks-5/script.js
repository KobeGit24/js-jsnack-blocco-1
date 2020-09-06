var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var numero = document.getElementById("numero");
    var firstnumber = document.getElementById('firstnumber').value;
    var secondnumber = document.getElementById('secondnumber').value;
    var operation = document.getElementById('operation').value;
    var result;


    if (operation == 'moltiplicazione') {
        result = firstnumber * secondnumber;
        numero.innerHTML = result;

    } else if (operation == 'divisione') {
        result = firstnumber / secondnumber;
        numero.innerHTML = result;

    } else if (operation == 'sottrazione') {
        result = firstnumber - secondnumber;
        numero.innerHTML = result;

    } else if (operation == 'addizione') {
        result = parseInt(firstnumber) + parseInt(secondnumber);
        numero.innerHTML = result;
    }
});
