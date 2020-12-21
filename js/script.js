// L'utente con questa applicazione web potrà creare il suo hamburger e conoscere il prezzo del suo ordine.
// - assegnerà obbligatoriamente un nome al suo hamburger.
// - deve selezionare almeno due ingredienti.
// - se inserisce un codice coupon tra quelli che già abbiamo in lista, applichiamo uno sconto del 20% sul totale.
// - tutto ciò viene "generato", quindi calcolato (prezzo e/o sconto), al click sul pulsante.
// - il testo dove inserire il nome dell'hamburger è un input, di quelli che abbiamo visto in classe, customizzato a nostro piacimento ;)
// Proseguite per step, piano piano, trovate il primo muro, i primi ostacoli commentandoli all'inizio del vostro codice. Cercate tutta la documentazione che vi possa servire per quell'obiettivo.
// Controllate anche la mia repo su boolean-code, dal live coding di oggi, ci sarà sicuramente qualcosa che potrà esservi utile :)



// step 1 : variabile che mi gestisce il primo input
var input = document.getElementsByClassName('name-burger')[0];

// creo una variabile per gestire il numero dei ceck che bisogna effetturare per andare avanti




// step 2 variabile che mi gestisce il seconod input quello dei prezzi
var costs = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');
// inserisco una variabile che mi 'conti' i ceck ?
var ceck = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');



// preparo variabile  costo totale del nostro ordine che inizialmente sarà zero e che poi si andra a sommare a tutti i prezzi
  var total = 50;
  var totalHtmlElement = document.getElementById('total-div');

// step 3 : creo un array di nomi che mi serviranno per lo sconto del 20 percento o devo inserire pero all interno del click
  var nomeCupon =['adele' , 'giovanni' , 'carmine'];
  // var discount = total - (total *0.2);
  // la inzializzo ma non do un valore daro un valore solo all interno della funzione
  var nome;

  // evento click su pulsante nel mio html c'è il bottone e una volta che schiaccio con una funzione succedono delle cose

  document.getElementById("button-ingredient").addEventListener("click", function() {
    // step 1: se non inserisco il nome e almeno due ingredieti non si andrà avanti
    if (input.value.length === 0  || costs.checked < 2 ){
      alert('inserisci nome e almeno due ingredienti');
    }else {
  // l evento sconto devo inzializzarlo a questo punto perche se lo faccio al terzo step non me lo prende - è importante
    nome = document.getElementById('sconto').value
  // ogni volta che clicco ripate da 50
    total = 50;
  // inoltre come per il nome del burger per andare avanti devo selezionare almeno due caselle senno non faccio partire il ciclo for

    for(var x = 0; x < costs.length; x++) {
      if(costs[x].checked) {
      total += parseInt(costs[x].value);
    }
  }

  }

    // step 2 : una volta scelti i miei ingredienti mi calcola la somma

   // step 3: se inserisco un nome nella lista array mi farà lo sconto altrimenti no
   console.log(nomeCupon, nome);

   if (nomeCupon.indexOf(nome) ===  -1) {
     alert('non puoi avere lo sconto');
   }else {
       total= total - (total *0.2);
   }

// popolo elemento #total- div con il totale del mio ordine e con 50 che era la partenza del costo della carne, tutto avviene dopo la parentesi quadrata del click che si chiude infatti alla fine --- stare attenti ---
  totalHtmlElement.getElementsByTagName('span')[0].innerText = total ;
});
