// Definisco tutte le variabili:

//Nome. cognome ed età

var name = document.getElementById('name-form').value;
var familyName = document.getElementById('family-name-form').value;
var categories = document.getElementById('categories').value;

console.log(name);
console.log(familyName);
console.log(categories);

// Km da percorrere

var km = document.getElementById('km-form').value;
var price = km * 0.21;

console.log(km);

//bottoni on e off

var ticketOn = document.getElementById('ticket-on');
var ticketOff = document.getElementById('ticket-off');


//Condizioni da porre in basse all'età

if (categories == "kid") {
    var discount = price / 100 * 20;
    var finalPrice = price - discount;

} else if (categories == "elder") {
    var discount = price / 100 * 40;
    var finalPrice = price - discount;

} else {
    finalPrice = price;
}


ticketOn.addEventListener("click" , function(){

  document.getElementById('full-name').innerHTML = "Messere: " + name + " " + categories + " della casata: " + familyName;
  document.getElementById('full-price').innerHTML = "La tariffa per lo vostro percorso in carrozza ammonta a " + finalPrice.toFixed(2) + " Fiorini";

})

ticketOff.addEventListener("click" , function(){

  document.getElementById('full-name').innerHTML = "Messere: " + name + " " + categories + " della casata: " + familyName;
  document.getElementById('full-price').innerHTML = "La tariffa per lo vostro percorso in carrozza ammonta a " + finalPrice.toFixed(2) + " Fiorini";

})
