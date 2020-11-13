/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById('run').addEventListener('click', function () {
    var day = document.getElementById('dob-day').value;
    var month = document.getElementById('dob-month').value;
    var year = document.getElementById('dob-year').value;

    // Be carefull with the month in new Date:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
    let visitorBirthDate = new Date(year, month - 1, day);

    console.log(visitorBirthDate.toString());

    //new date is today
    let differenceInYears =
      new Date().getFullYear() - visitorBirthDate.getFullYear();

    alert(`You are ${differenceInYears} old.`);
  });
})();
