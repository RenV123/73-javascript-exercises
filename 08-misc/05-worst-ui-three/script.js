/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  Array.from(document.querySelectorAll('.field.slot')).forEach((fieldSlot) => {
    var inputElement = Array.from(fieldSlot.children).find(
      (child) => child.nodeName == 'INPUT'
    );
    var buttonElement = Array.from(fieldSlot.children).find(
      (child) => child.nodeName == 'BUTTON'
    );

    buttonElement.addEventListener('click', () => {
      let minValue = Number(inputElement.dataset.min);
      let maxValue = Number(inputElement.dataset.max);

      let value = randomNr(minValue, maxValue);
      inputElement.value = value > 9 ? value : `0${value}`;
      updatePhoneNr();
    });
  });

  const randomNr = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const updatePhoneNr = () => {
    let phoneNrText = '0';
    Array.from(document.querySelectorAll('.field.slot > input')).forEach(
      (input) => {
        phoneNrText += input.value;
      }
    );
    document.getElementById('target').textContent = phoneNrText;
  };
})();
