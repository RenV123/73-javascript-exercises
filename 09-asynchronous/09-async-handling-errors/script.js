/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(async () => {
  const displayPersons = async () => {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
    // Look at promise rejection
    try {
      let persons = await window.lib.getPersons();
      console.log(persons);
    } catch (error) {
      console.error(error);
    }
  };

  document.getElementById('run').addEventListener('click', displayPersons);
})();
