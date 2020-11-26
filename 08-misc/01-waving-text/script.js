/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let target = document.getElementById('target');
  const nrOfSizes = 30;
  let i = 0;
  setInterval(() => {
    let sine = Math.abs(Math.sin(i / nrOfSizes));
    console.log(sine);
    target.style.fontSize = `${sine * 1.5}rem`;
    i++;
  }, 50);
})();
