/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById('run').addEventListener('click', () => {
    let = passwordOne = document.getElementById('pass-one');
    let = passwordTwo = document.getElementById('pass-two');

    if (passwordOne.value !== passwordTwo.value) {
      passwordOne.style.borderColor = 'red';
      passwordTwo.style.borderColor = 'red';
    }
  });
})();
