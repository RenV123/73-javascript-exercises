/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*Taken from: https://stackoverflow.com/a/56266358
The idea is that to validate if the string is a color we basically
set the color of a style object. If it's a valid color the style's color member will be set.
Otherwise the string will be empty.*/

const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}

(function() {

    document.getElementById("run").addEventListener("click", (event) => {

        //get color
        let color = document.getElementById("color").value;

        if(isColor(color)) {
            document.body.style.backgroundColor = color;
        }
        else {
            alert(`Color: ${color} is not a valid color.`);
        }
    });

})();
