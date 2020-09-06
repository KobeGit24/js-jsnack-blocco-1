//Creare e stampare a schermo una frase contenente N parole (N in base a quante ne vuole generare l'utente attraverso un prompt), grazie all'utilizzo dell'API e dell'URL random/word.

function init() {
    createWord();
}

function createWord() {
    var userNumWord = parseInt(prompt('inserisci il numero di parole per la frase'));
    j=0;
    while (j<userNumWord) {
       
       $.ajax({
            url : 'https://flynn.boolean.careers/exercises/api/random/word',
            method : 'GET',
            success : function (data,state) {
                var response = data.response;
                var success = data.success;
                var word = $('#word');
                console.log(data);
                if (success) {
                        word.append('<span>' + response + '</span>');
                } else {
                    console.log('error');
                }
                   },
            error : function (request,state,error) {
           
                console.log(request);
                console.log(state);
                console.log(error);
            }
        })
    j++; 
    }
}

$(document).ready(init);
