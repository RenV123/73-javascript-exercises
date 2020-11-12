/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*It seems the js Math.random function only provides you with random floats, 
so we have to create our own function to do this.*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

(() => {
  const birds = [
    { name: 'seagull', num: 1 },
    { name: 'raven', num: 3 },
    { name: 'chickadee', num: 2 },
    { name: 'owl', num: 4 },
    { name: 'buzzard', num: 8 },
    { name: 'pigeon', num: 1 },
    { name: 'magpie', num: 3 },
    { name: 'vulture', num: 2 },
    { name: 'falcon', num: 1 },
    { name: 'robin', num: 2 },
    { name: 'dove', num: 1 },
    { name: 'crow', num: 5 },
  ];
  const adjectives = new Set([
    'gray',
    'hoopoe',
    'singing',
    'howling',
    'perched',
    'tall',
    'small',
    'blue',
    'panting',
    'tangent',
    'sported',
  ]);

  document.getElementById('run').addEventListener('click', () => {
    // get random bird from array.
    let bird = birds[getRandomInt(0, birds.length - 1)];

    //Using the spread operator put the set in an array and use the same approach to get a random element
    //Not sure if this is the best approach.
    let adjective = [...adjectives][getRandomInt(0, adjectives.size - 1)];

    let isMultiple = bird.num > 1;
    document.getElementById('target').innerHTML = `
    ${isMultiple ? 'A few' : 'A'} ${adjective} ${bird.name}${
      isMultiple ? "'s" : ''
    }`;
  });
})();
