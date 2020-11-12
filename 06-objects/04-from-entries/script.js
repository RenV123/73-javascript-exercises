/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const keys = ['name', 'species', 'age', 'gender', 'color'];
  const values = ['Skitty', 'cat', 9, 'female', 'tabby'];

  document.getElementById('run').addEventListener('click', () => {
    /*
     * The .map creates a map of the array keys
     * The map function has as parameter a callback ( a type of function)
     * This callback has as arguments the currentValue, index, array, thisArg
     * We don't need arg currentValue so it's replaced with an underscore
     * The callback returns an array with two elements (a key and value)
     * This is stored inside the map.
     * Using the fromEntries function we convert this map with arrays to an object.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     */
    console.log(Object.fromEntries(keys.map((_, i) => [keys[i], values[i]])));

    //Same as above but more readable:
    /*
    let callback = (currentValue, i) => {
      return [keys[i], values[i]];
    };

    let map = keys.map(callback);
    let object = Object.fromEntries(map);
    console.log(object);
    */
  });
})();
