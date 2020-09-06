//Chiedere all'utente quanti elementi vuole includere nell'array. Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100. Stampare a schermo la somma dei numeri generati.
//https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n


function init() {
    guestList();
}

function guestList() {
    var userNum = parseInt(prompt('inserisci un numero'));
        $.ajax({
            url : 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=' + userNum,
            method : 'GET',
            success : function (data) {
                
                var response = data.response;
                var success = data.success;
                console.log(data);
                if (success) {
                    var sum = 0;
                    for (var i = 0; i < response.length; i++) {
                        var element = response[i];
                        sum += element;  
                    }
                } else {
                    console.log('error');
                }  
                console.log(sum);  
            },
            error : function (error) {
           
                console.log(error);
            }
        })
    
}

$(document).ready(init);