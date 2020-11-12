/* becode/javascript
 *
 * /05-arrays/10-reduce-array/script.js - 5.10: utilisation d'un reducer
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var people = [
    {
      firstname: 'Grenville',
      lastname: 'Stive',
      age: 64,
    },
    {
      firstname: 'Luis',
      lastname: 'Jedrzejewsky',
      age: 73,
    },
    {
      firstname: 'Teodor',
      lastname: 'Warrington',
      age: 56,
    },
    {
      firstname: 'Danya',
      lastname: 'Bigby',
      age: 17,
    },
    {
      firstname: 'Jemmy',
      lastname: 'Goodbur',
      age: 87,
    },
    {
      firstname: 'Vilhelmina',
      lastname: 'Fost',
      age: 43,
    },
    {
      firstname: 'Igor',
      lastname: 'Putson',
      age: 45,
    },
    {
      firstname: 'Klement',
      lastname: 'Braybrook',
      age: 88,
    },
    {
      firstname: 'Trefor',
      lastname: 'Le Jean',
      age: 69,
    },
    {
      firstname: 'Tarrah',
      lastname: 'de Clerc',
      age: 77,
    },
    {
      firstname: 'Brad',
      lastname: 'Hookes',
      age: 82,
    },
    {
      firstname: 'Kippar',
      lastname: 'Fancet',
      age: 25,
    },
    {
      firstname: 'Jecho',
      lastname: 'Hawket',
      age: 87,
    },
    {
      firstname: 'Lief',
      lastname: 'Blazy',
      age: 80,
    },
    {
      firstname: 'Jo-ann',
      lastname: 'Sacase',
      age: 81,
    },
  ];

  document.getElementById('run').addEventListener('click', () => {
    const initialSum = 0;

    /*
        The Reducer explained:
        * Is called for every element in the array
        * the accumulator the first time will be either the first element or in this case the initialSum.
        * the next time the accumulator will be the result of the reducer (0 + person.age)
        * the person is the next element in the array
        */
    const reducer = (accumulator, person) => {
      return accumulator + person.age;
    };

    console.log(people.reduce(reducer, initialSum));
  });
})();
