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
  let targetValue = document.getElementById('target').textContent;

  const calculateFontSize = (i, range) => {
    //Math.sin calculates sin based on the radials entered. sin(PI/2) == 1
    //Abs makes sure i's always positive
    // Ceil to round up.
    return Math.round(Math.abs(Math.sin((i / range) * (Math.PI / 2)) * range));
  };

  let offset = 0;
  setInterval(() => {
    let letters = targetValue.split('');
    for (let i = 0; i < letters.length; i++) {
      let size = calculateFontSize(i + offset, 6);
      letters[i] = letters[i].fontsize(size);
    }
    offset += 1;
    document.getElementById('target').innerHTML = letters.join('');
  }, 50);
})();
