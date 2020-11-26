/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let target = document.getElementById('target');
  var fullText = document.getElementById('target').textContent;
  let i = 1;
  const maxTimeout = 200;
  /**
   * A recursive function is a function that calls it self.
   */
  const typeNextLetterRecursive = () => {
    if (i <= fullText.length) {
      target.textContent = fullText.slice(0, i);
      i++;
      var rand = Math.round(Math.random() * maxTimeout);
      setTimeout(typeNextLetterRecursive, rand);
    }
  };

  //Call it randomly the first time
  typeNextLetterRecursive();
})();
