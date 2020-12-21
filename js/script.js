// L'utente con questa applicazione web potrà creare il suo hamburger e conoscere il prezzo del suo ordine.
// - assegnerà obbligatoriamente un nome al suo hamburger.
// - deve selezionare almeno due ingredienti.
// - se inserisce un codice coupon tra quelli che già abbiamo in lista, applichiamo uno sconto del 20% sul totale.
// - tutto ciò viene "generato", quindi calcolato (prezzo e/o sconto), al click sul pulsante.
// - il testo dove inserire il nome dell'hamburger è un input, di quelli che abbiamo visto in classe, customizzato a nostro piacimento ;)
// Proseguite per step, piano piano, trovate il primo muro, i primi ostacoli commentandoli all'inizio del vostro codice. Cercate tutta la documentazione che vi possa servire per quell'obiettivo.
// Controllate anche la mia repo su boolean-code, dal live coding di oggi, ci sarà sicuramente qualcosa che potrà esservi utile :)

// primo  stemp è un imput devo inserire il nome del suo amburgher e faccio un ciclo for per dirgli che deve per forza inserire un valore

// var input = document.getElementsByClassName('name-burger')[0];
// var testoMessaggio = 'ciao! ';
//
// document.getElementById('button-ingredient').addEventListener("click", function(){
//   for (var i = 0; i < input.length; i++) {
//     if (input.length < 0) {
//       alert('inserisci nome')
//     }else {
//
//     }
//   }
// }


var costs = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');

  // preparo variabile totale del nostro ordine
  var total = 0;
  var totalHtmlElement = document.getElementById('total-div');

  // evento click su pulsante
  document.getElementById("button-ingredient").addEventListener("click", function() {

  total = 0;

  for(var x = 0; x < costs.length; x++) {
    if(costs[x].checked) {
      total += parseInt(costs[x].value);
  }
}

// popolo elemento #total con il totale del mio ordine e con 50 che era la partenza del costo della carne
  totalHtmlElement.getElementsByTagName('span')[0].innerText = total + 50;
});

// creo un array di nomi che mi serviranno per lo sconto del 20 percento o devo inserire pero all interno del click

var nomeCupon =['adele' , 'giovanni' , 'carmine'];
var discount = total - (total *0.2);

if (nomeCupon.indexOf(nomeCupon) ===  -1) {
  console.log('non poi avere lo sconto ');
}else {
    totalHtmlElement.getElementsByTagName('span')[0].innerText = discount;
}
