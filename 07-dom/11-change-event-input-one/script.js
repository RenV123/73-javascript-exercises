/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let passwordOne = document.getElementById('pass-one');
  let counter = document.getElementById('counter');
  passwordOne.addEventListener('input', () => {
    let passwordLength = passwordOne.value.length;
    if (passwordLength > 10) {
      let newPassword = passwordOne.value.substring(0, 10);
      passwordOne.value = newPassword;
    }
    counter.innerHTML = `${passwordOne.value.length}/10`;
  });
})();
