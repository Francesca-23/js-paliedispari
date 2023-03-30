/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


function random(){
   let randomNumber = Math.floor( Math.random() * 5 ) + 1;
   return randomNumber;
}

let button = document.querySelector('#button');

button.addEventListener("click", function(){

    //variabili per i numeri di utente e pc
    let numeroUtete = document.getElementById('numero').value;
    let numeroComputer = random();

    //stampa del numero random
    document.querySelector('#box').innerHTML += `<div class="p-1 border border-dark col-1 m-auto bg-white">${numeroComputer}</div>`;

    //variabili per la selezione di pari o dispari
    let pari = document.querySelector('#flexRadioDefault1').checked;
    let dispari = document.querySelector('#flexRadioDefault2').checked;

    //somma dei numeri
    let somma = parseInt(numeroUtete) + parseInt(numeroComputer);
    console.log(somma)

    let vincitore

    //vittoria utente o computer
    if((somma % 2 == 0) && (pari)){
        vincitore = `La somma è ${somma} :  Bravo! Hai vinto`;
        document.querySelector('#risultato').innerHTML += `<div class="p-2 bg-info rounded-3 shadow my-3 text-center">${vincitore}</div>`

    }else if((somma % 2 != 0) && (dispari)){
        vincitore = `La somma è ${somma} :  Bravo! Hai vinto`;
        document.querySelector('#risultato').innerHTML += `<div class="p-2 bg-info rounded-3 shadow my-3 text-center">${vincitore}</div>`

    }else if((somma % 2 == 0) && (dispari)){
        vincitore =`La somma è ${somma} :  Mi dispiace, hai perso`;
        document.querySelector('#risultato').innerHTML += `<div class="p-2 bg-info rounded-3 shadow my-3 text-center">${vincitore}</div>`

    }else if((somma % 2 != 0) && (pari)){
        vincitore =`La somma è ${somma} :  Mi dispiace, hai perso`;
        document.querySelector('#risultato').innerHTML += `<div class="p-2 bg-info rounded-3 shadow my-3 text-center">${vincitore}</div>`

    }

})