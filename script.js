/* Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.) */

//Alert 5 random numbers you generated.
var randomNumbers = [];
for (i = 0; i < 5; i++) {
  var currentNumber = Math.floor(Math.random() * 100) + 1;
  if (!randomNumbers.includes(currentNumber)) {
    randomNumbers.push(currentNumber);
  }
}
alert(randomNumbers.join(" - "));

//After the user's ok, start a 30 sec timer. (Bonus: Display the timer).
setTimeout(guessNumbers, 3000);

//After 30 sec, prompt (one for each time) to the user the numbers he saw previously. (Bonus: get the numbers by a form).
function guessNumbers() {
    var guessedNumbers = [];
    for (var i = 0; i < 5; i++) {
    var userInput = parseInt(prompt("Inserisci, uno alla volta, i numberi che hai visto precedentemente " + (i + 1) +"/5"));
    userNumbers = [];
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert("Il numero inserito non è valido");
        i--;
    } else {
        if (!userNumbers.includes(userInput)) {
            userNumbers.push(userInput);
        }
        if (randomNumbers.includes(userInput)) {
            if(!guessedNumbers.includes(userInput)) {
                guessedNumbers.push(userInput);
            }
        }
    }
    }
}
//As soon as the user has entered the 5 numbers, the software alerts how many and which of the numbers he has guessed. (Bonus: Print the result in page instead of alert it.)
display.innerText = "Hai indovinato " + guessedNumbers.length + "/5 numeri: " + guessedNumbers.join(" - ");

document.getElementById("display").innerHTML = secondsLeft;