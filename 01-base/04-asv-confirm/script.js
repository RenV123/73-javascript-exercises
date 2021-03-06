/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let userConfirmed = false;
    do {
        let age = prompt("What is your Age?");
        let gender = prompt("What is your Gender?");
        let town = prompt("In which town do you live?");

        userConfirmed = confirm(`You are a ${age} old ${gender} living in the town ${town}?`);
    } while(!userConfirmed)

})();
