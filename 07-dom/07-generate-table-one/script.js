/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
  let tableHead = table.createTHead();
  tableHead.innerHTML = 'My Header';
  for (let i = 0; i < 10; i++) {
    let row = tableHead.insertRow();
    row.innerHTML = 'My Row';
  }
  targetElement.appendChild(table);
})();
