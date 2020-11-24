/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  var elements = document.getElementsByClassName('target');
  //We have to turn elements into an array to use foreach.
  // As it's an HTMLCollection:
  //https://dom.spec.whatwg.org/#dom-document-getelementsbyclassname
  Array.from(elements).forEach((element) => {
    element.innerHTML = 'owned';
  });
})();
