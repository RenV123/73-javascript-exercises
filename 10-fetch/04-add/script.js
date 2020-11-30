/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(async () => {
  const BASE_URL = 'http://127.0.0.1:3000';

  //First fetch our list of heroes
  let promise = await fetch(`${BASE_URL}/heroes`);
  let heroes = await promise.json();

  const onRunButtonClicked = async () => {
    try {
      let hero = {
        id: generateId(),
        name: document.getElementById('hero-name').value,
        alterEgo: document.getElementById('hero-alter-ego').value,
        powers: document.getElementById('hero-powers').value.split(','),
      };
      heroes.push(hero);
      console.log(heroes);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Hacky way of generating a new id for the hero.
   */
  const generateId = () => {
    //Why is this hacky?
    // Because there's no guarantee that the last element will also contain the id with the largest nr.
    return heroes[heroes.length - 1].id + 1;
  };

  document.getElementById('run').addEventListener('click', onRunButtonClicked);
})();
