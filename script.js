// Definisco tutte le variabili:

//Nome e cognome

var name = document.getElementById('name-form').value;
var name = document.getElementById('family-name-form').value;

// Km da percorrere

var km = document.getElementById('km').value;
var price = km * 0.21;


//Condizioni da porre in basse all'età

if (categories == "kid") {
    var discount = price / 100 * 20;
    var finalPrice = price - discount;

} else if (categories == "elder") {
    var discount = price / 100 * 40;
    var finalPrice = price - discount;

} else {
    price = price;
}
