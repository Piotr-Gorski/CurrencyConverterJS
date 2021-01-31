
﻿var base, convert, inputValue, outputValue;

function loadConvert() {
    return  convert = document.getElementById('outputCurrency').value;
}

function loadBase() {
    return  base = document.getElementById('inputCurrency').value;
}

function loadInputValue() {
    return  inputValue = document.getElementById('inputValue').value;
}

function loadOutputValue() {
    return  outputValue = document.getElementById('outputValue').value;
}

function changeRates(){
    convert = loadConvert();
    base = loadBase();
    inputValue = loadInputValue();
    outputValue = loadOutputValue();
    document.getElementById('inputCurrency').value = convert;
    document.getElementById('outputCurrency').value = base;
    document.getElementById('inputValue').value = outputValue;
    document.getElementById('outputValue').value = inputValue;
}

function loadDailyRates(){
    var url = 'http://api.nbp.pl/api/exchangerates/rates/a/'+loadBase();
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        success: function(result){
            var results = loadInputValue() * result.rates[0]["mid"];
            $("#outputValue").val(results.toFixed(2));
        },
        error: function(){
            alert("Something goes wrong!");
        }
    });
}