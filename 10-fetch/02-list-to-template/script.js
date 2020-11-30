/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const BASE_URL = 'http://127.0.0.1:3000';

  const onRunButtonClicked = async () => {
    //first get the template
    let template = document.getElementById('tpl-hero');
    let targetElement = document.getElementById('target');

    try {
      let response = await fetch(`${BASE_URL}/heroes`);
      response.json().then((jsonData) => {
        jsonData.forEach((hero) => {
          var heroElement = template.content.cloneNode(true);
          heroElement.querySelector('.name').innerHTML = hero.name;
          heroElement.querySelector('.alter-ego').innerHTML = hero.alterEgo;
          heroElement.querySelector('.powers').innerHTML = hero.abilities.join(
            ', '
          );
          targetElement.appendChild(heroElement);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  document.getElementById('run').addEventListener('click', onRunButtonClicked);
})();
