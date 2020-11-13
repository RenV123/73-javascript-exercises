/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
  let currentDate = new Date();

  //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  const options = {
    weekday: 'long', //long means written in full.
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false, //Otherwise it will use AM/PM
  };
  document.getElementById('target').innerHTML = new Intl.DateTimeFormat(
    'en-GB',
    options
  ).format(currentDate);
})();
