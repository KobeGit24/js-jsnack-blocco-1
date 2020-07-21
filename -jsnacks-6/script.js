
//Sfruttando la seguente API, ciclare sull'array ricevuto e collocare i valori pari nel div verde, e quelli dispari nel div rosso:


function init() {
    randomEvenOdd();
}

function randomEvenOdd () {

    $.ajax({
        url : 'https://flynn.boolean.careers/exercises/api/array/integers?min=50&max=100&items=10',
        method : 'GET',
        success : function (data,state) {

            var arrayNumRnd = data.response;
            var success = data.success;
            var even = $('#even');
            var odd = $('#odd');
            console.log('var arrayNumRnd = ', arrayNumRnd);

            for (var i = 0; i < arrayNumRnd.length; i++) {
                
                if (success) {
                    if (arrayNumRnd[i]%2===0) {
                        even.append('<span>' + arrayNumRnd[i] + '</span>');
                    } else {
                        odd.append('<span>' + arrayNumRnd[i] + '</span>');  
                    }    
                }else {
                    console.log('not success');
                }
                
            }
        },
        error : function (request,state,error) {

            console.log(request);
            console.log(state);
            console.log(error);
        }
    })
}

$(document).ready(init);
