/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 100;
let num2 = 32;
num1 > num2
  ? console.log(num1, " è più grande di ", num2)
  : console.log(num2, " è più grande di ", num1);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 8;
if (num5 !== 5) {
  console.log("Not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let dividendo = 25;
const divisore = 5;
if (dividendo % divisore === 0) {
  console.log("Divisibile per ", divisore);
} else {
  console.log("Non è divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 2;
let num4 = 10;
if (num3 === 8 || num4 === 8) {
  console.log("uguale a 8");
} else if (num3 + num4 === 8 || num3 - num4 === 8 || num4 - num3 === 8) {
  console.log("uguale a 8");
} else {
  console.log("non è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 40;
const shipping = 10;
totalShoppingCart > 50
  ? console.log(
      "la spedizione è gratuita, il tuo totale sarà: ",
      totalShoppingCart
    )
  : console.log(
      "la spedizione non è gratuita, il tuo totale+spedizione sarà: ",
      totalShoppingCart + shipping
    );

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let scontoPercentuale = 20;
let valoreScontato = (totalShoppingCart * scontoPercentuale) / 100;
totalShoppingCart = totalShoppingCart - valoreScontato;
if (totalShoppingCart > 50) {
  console.log(
    "Hai diritto alla spedizione gratuita, il tuo carrello scontato è di: ",
    totalShoppingCart,
    " euro"
  );
} else {
  console.log(
    "non hai diritto alla spedizione gratuita, il tuo carrello scontato+spedizione è di: ",
    totalShoppingCart + shipping,
    " euro"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let variabile1 = 20;
let variabile2 = 56;
let variabile3 = 88;

if (variabile1 < variabile2 && variabile2 < variabile3) {
  console.log("Numeri ordinati: ", variabile3, variabile2, variabile1);
} else if (variabile3 < variabile2 && variabile2 < variabile1) {
  console.log("Numeri ordinati: ", variabile1, variabile2, variabile3);
} else if (variabile1 < variabile3 && variabile3 < variabile2) {
  console.log("Numeri ordinati: ", variabile2, variabile3, variabile1);
} else {
  console.log("Numeri ordinati: ", variabile2, variabile1, variabile3);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
if (typeof x === "number") {
  console.log("il valore fornito è un numero");
} else {
  console.log("non è un numero, ma: ", typeof x);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pariDispari = 2232;
if (pariDispari % 2 === 0) {
  console.log("Il numero: ", pariDispari, " è pari");
} else {
  console.log("Il numero: ", pariDispari, " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 3;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri = [];
numeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let ultimoIndice = numeri.length - 1;
numeri.splice(ultimoIndice, 1, 100);
console.log(numeri);
