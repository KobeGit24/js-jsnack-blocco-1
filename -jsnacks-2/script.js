var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    console.log(name + surname);
});