/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var operandOne = Number(document.getElementById("op-one").value);
var operandTwo = Number(document.getElementById("op-two").value);

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("op-one").addEventListener("change", (event) => {
        // perform an addition
        operandOne =  Number(document.getElementById("op-one").value);
    });
    document.getElementById("op-two").addEventListener("change", (event) => {
        // perform an addition
        operandTwo =  Number(document.getElementById("op-two").value);
    });

    const performOperation = operation => {
        // perform the operation
        switch(operation) {
            case 'addition':
                alert(`${operandOne} + ${operandTwo} = ${operandOne + operandTwo}`);
                break;
            case 'subtraction':
                alert(`${operandOne} - ${operandTwo} = ${operandOne - operandTwo}`);
                break;
            case 'multiplication':
                alert(`${operandOne} * ${operandTwo} = ${operandOne * operandTwo}`);
                break;
            case 'division':
                if(operandTwo > 0 ) {
                    alert(`${operandOne} / ${operandTwo} = ${operandOne / operandTwo}`);
                }
                else {
                    alert(`Cannot devide by zero!`);
                }
                break;
            default:
               console.error(`Unknown operation: ${operation}.`); 
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
