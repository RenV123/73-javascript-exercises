/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let targetElement = document.getElementById('target');
  let table = document.createElement('table');

  //Create the rest of the columns
  let tableHead = table.createTHead();
  for (let i = 1; i <= 10; i++) {
    let row = tableHead.insertRow();
    for (let j = 1; j <= 10; j++) {
      let cell = row.insertCell();
      if (i === 1 || j === 1) {
        cell.innerHTML = `<b>${i * j}</b>`;
      } else {
        cell.innerHTML = i * j;
      }
    }
  }

  targetElement.appendChild(table);
})();
