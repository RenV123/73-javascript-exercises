/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    /*<p>When you click the button, log in the console if, yes or no, there is an <em>apple</em> in the array <strong>fruits</strong>.</p>*/

    document.getElementById("run").addEventListener("click", ()=> {
        

        /*if(fruits.find(fruit => fruit == "apple") == undefined) {
            console.log("There's an apple.")
        }
        else {
            console.log("There's no apple.");
        }*/

        /*Same as above but shorter*/
        /*fruits.find(fruit => fruit == "apple") !== undefined ? console.log("There's an apple.") : console.log("There's no apple.");*/

        //Looking at the title of the exercise, this is probably the required solution:
        fruits.includes('apple') ? console.log("There's an apple.") : console.log("There's no apple.");
    });

})();
