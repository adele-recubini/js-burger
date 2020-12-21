// L'utente con questa applicazione web potrà creare il suo hamburger e conoscere il prezzo del suo ordine.
// - assegnerà obbligatoriamente un nome al suo hamburger.
// - deve selezionare almeno due ingredienti.
// - se inserisce un codice coupon tra quelli che già abbiamo in lista, applichiamo uno sconto del 20% sul totale.
// - tutto ciò viene "generato", quindi calcolato (prezzo e/o sconto), al click sul pulsante.


// step 1 : variabile che mi gestisce il primo input
var input = document.getElementsByClassName('name-burger')[0];


// step 2 variabile che mi gestisce il seconodo input quello dei prezzi ed è quello che mi gestira anche in numero di ceck che devo avere per continuare

var costs = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');

// preparo variabile  costo totale del nostro ordine che inizialmente sarà zero e che poi si andra a sommare a tutti i prezzi
  var total = 50;
  var totalHtmlElement = document.getElementById('total-div');

// step 3 : creo un array di nomi che mi serviranno per lo sconto del 20 percento
  var nomeCupon =['adele' , 'giovanni' , 'carmine'];
  // var discount = total - (total *0.2);

  // la inzializzo ma non do un valore daro un valore solo all interno della funzione
  var nome;

  // evento click su pulsante nel mio html c'è il bottone e una volta che schiaccio con una funzione succedono delle cose

  document.getElementById("button-ingredient").addEventListener("click", function() {

    var sumChecked = 0
    // step 1 : se non seleziono almeno due checked non continuare
    for (var x = 0; x < costs.length; x++) {
      sumChecked += costs[x].checked
    }
    if (sumChecked < 2) {
      alert (' seleziona almeno due ingredienti')
    }

    // step 1: se non inserisco il nome non continuare
    if (input.value.length === 0 ){
      alert('inserisci nome');
    }else {
  // l evento sconto devo inzializzarlo a questo punto perche se lo faccio al terzo step non me lo prende - è importante
    nome = document.getElementById('sconto').value
  // ogni volta che clicco ripate da 50
    total = 50;
 // con un ciclo for sommo tutti i ceck ma solo se sono selezionati! vedi cheched
    for(var x = 0; x < costs.length; x++) {
      if(costs[x].checked) {
      total += parseInt(costs[x].value);
    }
  }

  }

   // step 3: se inserisco un nome nella lista array mi farà lo sconto altrimenti no
   // console.log(nomeCupon, nome);

   if (nomeCupon.indexOf(nome) ===  -1) {
     alert('non puoi avere lo sconto');
   }else {
       total= total - (total *0.2);
   }

// popolo elemento #total- div con il totale del mio ordine e con 50 che era la partenza del costo della carne, tutto avviene dopo la parentesi tonda del click che si chiude infatti alla fine inieme alla parentesi graffa  --- stare attenti ---
  totalHtmlElement.getElementsByTagName('span')[0].innerText = total ;
});
