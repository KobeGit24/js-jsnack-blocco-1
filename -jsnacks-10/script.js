//Con l'aiuto dell'API Boolean a questo indirizzo creare un array di 50 numeri compresi tra 1 e 100
//Chiedere all'utente un numero compreso tra 1 e 100. Se il numero è compreso tra i 50 numeri precedentemente estratti allora il gioco continua, altrimenti termina. Qualora finisca indicare quanti numeri corretti sono stati indovinati

function init() {
    guestList();
}

function guestList() {
    $.ajax({
        url : 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=50',
        method : 'GET',
        success : function (data) {
                
            var response = data.response;
            var success = data.success;
            console.log(data);
            if (success) {
                console.log(response);
                if (response.length === 50) {
                    var userNum = parseInt(prompt('inserisci un numero'));
                    isInArray(userNum,response);
                }
            } else {
                console.log('error');
            }  
                
        },
        error : function (error) {
                
            console.log(error);
        }
    })
    
}

function isInArray(x,y) {
    while (y.includes(x)) {
        var x = parseInt(prompt('inserisci un numero'));
    }

    if (!(y.includes(x))) {
        console.log('hai perso');
    }
}

$(document).ready(init);