// Creare 3 select. In una potremo inserire i giorni da 1 a 31, nella seconda i mesi da 1 a 12, nella terza gli anni dal 1980 al 2017.  Generiamo le tre select con javascript / jQuery

function init() {

    initSelect();
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