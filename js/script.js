
/* Il programma dovrà chiedere all'utente il numero 
di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale 
del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo).
 Questo richiederà un minimo di ricerca. */


 /* 
 
 -chiedere l'età del passeggero e memorizzarlo
 -chiedere quanti kilometri dovrà percorrere il passeggero e memorizzarlo
 -calcolare prezzo base del biglietto e memorizzarlo
 ? SE il passeggero è minorenne
    °applicare il 20% di sconto al prezzo finale del biglietto
 :? ALTRIMENTI SE il passeggero OVER65
    °applicare il 40% di sconto al prezzo finale del biglietto
 : ALTRIMENTI
    °non applicare nessuno sconto al prezzo finale del biglietto.

 
*/
 


let etaPasseggero = prompt("Quanti anni hai?");


if (etaPasseggero == null){
    alert("Inserisci un'età !");
    etaPasseggero = prompt("Quanti anni hai?");
    console.log(parseInt(etaPasseggero));
    
} else {
    console.log(parseInt(etaPasseggero));
}

let kilometriDaPercorrere = prompt("Quanti kilometri devi percorrere?");

if (kilometriDaPercorrere == null){
    alert("Inserisci i kilometri da percorrere !");
    kilometriDaPercorrere = prompt("Quanti kilometri devi percorrere?");
    console.log(parseInt(kilometriDaPercorrere));
    
} else {
    console.log(parseInt(kilometriDaPercorrere));
}


let prezzoBiglietto = 0.21 * kilometriDaPercorrere ;
console.log(`

    Prezzo Standard : ${prezzoBiglietto}  ${" \u20AC"}

    `);

if(etaPasseggero < 18){
    
    let prezzoBigliettoFinale = prezzoBiglietto - (20 * prezzoBiglietto) / 100;
    document.writeln(`

    Complimenti, hai diritto ad uno sconto del 20% !
    Prezzo biglietto: ${prezzoBigliettoFinale.toFixed(2)} ${" \u20AC"}
    
    `);

} else if (etaPasseggero > 65){
    let prezzoBigliettoFinale = prezzoBiglietto - (40 * prezzoBiglietto) / 100;
    document.writeln(`

    Complimenti, hai diritto ad uno sconto del 40% !
    Prezzo biglietto : ${prezzoBigliettoFinale.toFixed(2)} ${" \u20AC"}

    `);

} else { (etaPasseggero >= 18) && (etaPasseggero <= 65) 
    let prezzoBigliettoFinale = prezzoBiglietto;
    document.writeln(`

    Spiacente, non puoi usufuire di uno sconto!
    Prezzo biglietto : ${prezzoBigliettoFinale}  ${" \u20AC"} 
        
        `);
    

}
