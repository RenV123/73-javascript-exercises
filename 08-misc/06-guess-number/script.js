/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  const randomNr = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const nrToGuess = randomNr(1, 100);
  let nrOfGuessesNeeded = 0;
  let userGuessElement = document.getElementById('user-guess');
  let hintsElement = document.getElementById('hints');
  userGuessElement.addEventListener('change', () => {
    nrOfGuessesNeeded++;
    let userGuess = Number(userGuessElement.value);

    if (userGuess === nrToGuess) {
      hintsElement.textContent = `That's it! You needed ${nrOfGuessesNeeded} guesses.`;
    } else if (userGuess > nrToGuess) {
      hintsElement.textContent = 'lower';
    } else {
      hintsElement.textContent = 'higher';
    }
  });
})();
