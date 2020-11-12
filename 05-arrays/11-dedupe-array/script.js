/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const fruits = [
    'cerise',
    'durian',
    'pomme',
    'poire',
    'fraise',
    'tomate',
    'orange',
    'mandarine',
    'fraise',
    'durian',
    'pêche',
    'cerise',
    'raisin',
    'cerise',
  ];

  document.getElementById('run').addEventListener('click', () => {
    /*
     * This creates an array (the outher square brackets) []
     * adds the contents of a Set (new Set) using the spread operator (...)
     * the Set is constructed of the contents of an array.
     * The reason this works is because Set is a collection where the values can occur only once.
     */
    //console.log([...new Set(fruits)]);

    /* My own attempt using the reducer and includes functions seen in the last exercises.*/

    const reducer = (accumulator, fruit) => {
      if (!accumulator.includes(fruit)) {
        accumulator.push(fruit);
      }
      return accumulator;
    };

    console.log(fruits.reduce(reducer, []));
  });
})();
