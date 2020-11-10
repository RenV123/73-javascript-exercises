/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    const changeColor = buttonId => {

        switch(buttonId)
        {
            case "red":
                document.body.style.backgroundColor = "#B8433D";
                break;
            case "green":
                document.body.style.backgroundColor = "#44C150";
                break;
            case "yellow":
                document.body.style.backgroundColor = "#BFBD40";
                break;
            case "blue":
                document.body.style.backgroundColor = "#4084BF";
                break;
            default:
                console.log("Invalid color option.")
        }
    }

    Array.from(document.querySelectorAll(".actions button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (changeColor($btn.id), false),
        ),
    );

})();
