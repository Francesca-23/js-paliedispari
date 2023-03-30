/*
1-Chiedere all’utente di inserire una parola
    
2-Creare una funzione per capire se la parola inserita è palindroma
*/

    let parola = document.getElementById('parola').innerText= "anna";
    console.log(parola)
    
    
    let lettera = parola.split("");
    console.log(lettera)
    
    let stringa
    
    for(let i= lettera.length; i >= 0; i--){
    
        stringa = lettera[i];
        console.log(stringa)
    }


    
    
