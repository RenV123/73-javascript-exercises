/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  //Note I did not get the heroes API to work using npm run api
  //If you get CORS request did not succeed/Not found make sure the server is live.
  // Use these commands:
  //npm run api

  //It's always good practice to define a base url (the root url of the api).
  const BASE_URL = 'http://127.0.0.1:3000';

  const onRunButtonClicked = async () => {
    try {
      let response = await fetch(`${BASE_URL}/heroes`);
      if (response.ok) {
        response.json().then((jsonData) => {
          console.log(jsonData);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  document.getElementById('run').addEventListener('click', onRunButtonClicked);
})();
