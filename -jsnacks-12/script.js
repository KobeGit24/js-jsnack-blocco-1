// Dopo aver popolato le select, creare un bottone. L'utente sceglierà una data tramite le select e farà click sul bottone. 
// Al click controlliamo che la data sia valida. 31 Febbraio ad esempio non è una data valida (aiutiamoci con Moment)

function init() {

    initSelect();
    checkData();
}

function checkData () {
    var btn = $('#check');
    btn.click(function () {

        var dayTarget = $('#day');
        var monthTarget = $('#month');
        var yearTarget = $('#year');

        var day = dayTarget.val();
        var month = monthTarget.val();
        var year = yearTarget.val();

        var date = day + '/' + month + '/' + year;
        var mom = moment(date, 'D/M/YYYY');
        var isValidDate = mom.isValid();
        var h1 = $('#isvalid');

        if (isValidDate) {
            h1.text('VALID DATE');
        } else {
            h1.text('ERROR !! INVALID DATE');   
        }
        
    });
}

function initSelect() {
    var dayTarget = $('#day');
    var monthTarget = $('#month');
    var yearTarget = $('#year');
    var months = moment.months();

    var template = $('#select-template').html();
    var compiled = Handlebars.compile(template);

    //day

    for (var i = 1; i <= 31; i++) {
        
        // var newOpt = $('<option value="' + i + '">' + i + '</option>');
        var newOptHTML = compiled({
            'value': i,
            'valuetxt': i
        });
        // dayTarget.append(newOpt);
        dayTarget.append(newOptHTML);
    }

    //month

    for (var i = 0; i < months.length; i++) {

        var month = months[i];
        // var newOpt = $('<option value="' + (i+1) + '">' + month + '</option>');
        var newOptHTML = compiled({
            'value': i+1,
            'valuetxt': month
        });
        // monthTarget.append(newOpt);
        monthTarget.append(newOptHTML);
    }

    //year 

    for (var i = 1980; i <= 2017; i++) {

        // var newOpt = $('<option value="' + i + '">' + i + '</option>');
        var newOptHTML = compiled({
            'value': i,
            'valuetxt': i
        });
        // yearTarget.append(newOpt);
        yearTarget.append(newOptHTML);
    }

}

$(document).ready(init);