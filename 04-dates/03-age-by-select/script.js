/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("run").addEventListener("click", function() {

        let visitorBirthDate = new Date();
        let currentDate = new Date(); //A new date is always today.
    
        visitorBirthDate.setDate(document.getElementById("dob-day").value);
        //In javascript months start from 0 (which would make sense except days don't start from 0 ??).
        visitorBirthDate.setMonth(Number(document.getElementById("dob-month").value) - 1); 
        visitorBirthDate.setFullYear(document.getElementById("dob-year").value);

        let differenceInYears = currentDate.getFullYear() - visitorBirthDate.getFullYear();
        alert(`You are ${differenceInYears} old.`);
        
    });


})();
