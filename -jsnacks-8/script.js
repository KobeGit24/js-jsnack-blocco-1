// Chiedere all'API 10 nomi da inserire in un array di invitati. Una volta generata la lista chiedere all'utente di dire il proprio nome. Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.

function init() {
    guestList();
}

function guestList() {
    var array = [];
    for (var i = 0; i < 10; i++) {  
        $.ajax({
            url : 'https://flynn.boolean.careers/exercises/api/random/name',
            method : 'GET',
            success : function (data) {
                
                var response = data.response;
                var success = data.success;
                console.log(data);
                if (success) {
                    array.push(response);
                } else {
                    console.log('error');
                }
                console.log(array);

                if (array.length===10) {
                    var userName = prompt('inserisci il tuo nome');
                }

                if (array.includes(userName)) {
                    alert('sei dentro');
                } else {
                    alert('sei fuori');
                }
            },
            error : function (error) {
           
                console.log(error);
            }
        })
    } 
    
}

$(document).ready(init);