/*
1-Chiedere all’utente di inserire una parola
    
2-Creare una funzione per capire se la parola inserita è palindroma
*/

    let parola = document.getElementById('parola').value;
    
    //funzione per invertire la parola 
    function palindroma(parola){

        let stringa = ""

        for(let i = parola.length -1; i >= 0; i--){
            stringa += parola[i];
        }

        return stringa
    }
    
    let parolaPali = palindroma(parola)

    //funzione per paragonare le due parole
    function parole(){

        parola = document.getElementById('parola').value;
        parolaPali = palindroma(parola)

        if(parola == parolaPali){
            document.querySelector('#container').innerHTML = "La parola è palindroma!"

        }else{
            document.querySelector('#container').innerHTML = "La parola non è palindroma!"
        }
    }

       
    

    
    

    

    

    
    
