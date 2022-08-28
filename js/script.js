// genera un numero da 1 a 6 randomico per te e per il computer, chi fa il numero più alto vince

var userDice = Math.floor(Math.random() * 7)
var pcDice = Math.floor(Math.random() * 7)

console.log("Punteggio Utente = " + userDice)
console.log("Punteggio Pc = " + pcDice)

if (userDice > pcDice) {

    console.log("Utente vince")
}

else {
    console.log("Pc vince")
}



