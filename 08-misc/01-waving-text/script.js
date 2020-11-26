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
    //Multiply pi/2 (which sin would return as 1) by i/range (this will give values of  -1 to 1 to -1)
    //I use abs to change the range to 0 to 1 and back to 0. Then multiply that by the range
    return Math.round(Math.abs(Math.sin((i / range) * (Math.PI / 2)) * range));
  };

  let offset = 0;
  const updateInterval = 50; //in miliseconds, lower equals faster animation
  setInterval(() => {
    let letters = targetValue.split('');
    for (let i = 0; i < letters.length; i++) {
      //Limit font size to 6 as it all fits nicely on one line this way.
      let size = calculateFontSize(i + offset, 6);
      letters[i] = letters[i].fontsize(size);
    }
    offset += 1;
    document.getElementById('target').innerHTML = letters.join('');
  }, updateInterval);
})();
