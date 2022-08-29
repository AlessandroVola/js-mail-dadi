// genera un numero da 1 a 6 randomico per te e per il computer, chi fa il numero più alto vince

<<<<<<< HEAD
var userDice = Math.floor(Math.random() * 6) + 1
var pcDice = Math.floor(Math.random() * 6) + 1
=======
var userDice = Math.floor(Math.random() * 7) + 1
var pcDice = Math.floor(Math.random() * 7) + 1
>>>>>>> 9fad9a416b926d5dec53a2723b806c5bdb83f566

console.log("Punteggio Utente = " + userDice)
console.log("Punteggio Pc = " + pcDice)

if (userDice > pcDice) {

    console.log("Utente vince")
}

else {
    console.log("Pc vince")
}




