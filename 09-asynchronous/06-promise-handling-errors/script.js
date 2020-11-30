/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById('run').addEventListener('click', () => {
    //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
    window.lib.getPersons().then(displayPersons, displayError);
  });

  /**
   * Displays a list of persons in the console.
   * @param {String} error An error message.
   * @param {*} posts A list of posts.
   */
  const displayPersons = (persons) => {
    persons.forEach((person) => {
      console.log(person);
    });
  };

  const displayError = (error) => {
    console.error(error);
  };
})();
