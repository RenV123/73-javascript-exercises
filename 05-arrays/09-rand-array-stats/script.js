/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*It seems the js Math.random function only provides you with random floats between 0 - 1, 
so we have to create our own function to scale them and convert them to integer nrs.*/
function getRandomInt(min, max) {
  // We multiply the random nr by the max - min and add at least one to make sure we do not multiply by 0
  // (in case min and max are very close).
  // By adding + 1 we make sure the random value is always at least the minimum
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function () {
  // your code here
  /*When you click the button, display the ten elements of an array of 
    10 numbers (between 1 and 100) in the table. Then display in the definition list: 
    the smallest number, the biggest number, the sum of all numbers, and their average.*/

  document.getElementById('run').addEventListener('click', () => {
    let arrayOfNumbers = [];
    let sumOfNrs = 0;
    let minNr = 100;
    let maxNr = 0;
    for (let i = 0; i < 10; i++) {
      //Use are random nr generator function
      var randNr = getRandomInt(1, 100);
      arrayOfNumbers.push(randNr);
      document.getElementById(`n-${i + 1}`).innerHTML = randNr;

      sumOfNrs += randNr;

      //if randNr is smaller than minNr randNr becomes the new minNr
      minNr = randNr < minNr ? randNr : minNr;

      //if randNr is larger than maxNr randNr becomes the new maxNr
      maxNr = randNr > maxNr ? randNr : maxNr;
    }

    document.getElementById('min').innerHTML = minNr;
    document.getElementById('max').innerHTML = maxNr;
    document.getElementById('sum').innerHTML = sumOfNrs;
    document.getElementById('average').innerHTML =
      sumOfNrs / arrayOfNumbers.length;
  });
})();
