/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var operandOne = 0;
var operandTwo = 0;

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("op-one").addEventListener("change", (event) => {
        // perform an addition
        operandOne =  Number(document.getElementById("op-one").value);
    });
    document.getElementById("op-two").addEventListener("change", (event) => {
        // perform an addition
        operandTwo =  Number(document.getElementById("op-two").value);
    });

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(`${operandOne} + ${operandTwo} = ${operandOne + operandTwo}`);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(`${operandOne} - ${operandTwo} = ${operandOne - operandTwo}`);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(`${operandOne} * ${operandTwo} = ${operandOne * operandTwo}`);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        if(operandTwo > 0 )
        {
            alert(`${operandOne} / ${operandTwo} = ${operandOne / operandTwo}`);
        }
        else {
            alert(`Cannot devide by zero!`);
        }
    });
})();
