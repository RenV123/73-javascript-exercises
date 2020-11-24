/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let passwordOne = document.getElementById('pass-one');
  let validity = document.getElementById('validity');
  passwordOne.addEventListener('input', () => {
    const password = passwordOne.value;
    let passwordLength = passwordOne.value.length;

    let nrsInPassword = 0;
    for (let char in password) {
      if (!isNaN(char)) {
        nrsInPassword++;
      }
    }

    if (passwordLength >= 8 && nrsInPassword >= 2) {
      validity.innerHTML = 'ok';
    } else {
      validity.innerHTML = 'Not ok';
    }
  });
})();
