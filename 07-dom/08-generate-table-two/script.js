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

  //Create a table Head
  let tableHead = table.createTHead();

  for (let i = 1; i <= 10; i++) {
    //Create a row
    let row = tableHead.insertRow();
    for (let j = 1; j <= 10; j++) {
      //Create a column
      let cell = row.insertCell();
      if (i === 1 || j === 1) {
        //make the first row and column bold
        cell.innerHTML = `<b>${i * j}</b>`;
      } else {
        cell.innerHTML = i * j;
      }
    }
  }

  targetElement.appendChild(table);
})();
