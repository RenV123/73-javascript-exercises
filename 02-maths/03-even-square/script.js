/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        const maxSquareNr = 21;
        let squareNrs = [];
        let i = 1;

        while(i*i < maxSquareNr) {
            squareNrs.push(Math.pow(i,2));
            i++;
        }

        alert(`The number of square nr's between 1 and 21 are: ${squareNrs.join(' ')}.`)



    });

})();
