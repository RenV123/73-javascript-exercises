/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById('run').addEventListener('click', () => {
    window.lib.getPersons(displayPersons);
  });

  /**
   * Displays a list of persons in the console.
   * @param {String} error An error message.
   * @param {*} posts A list of posts.
   */
  const displayPersons = (error, persons) => {
    if (error) {
      console.error(error);
    } else {
      persons.forEach((person) => {
        console.log(person);
      });
    }
  };
})();
