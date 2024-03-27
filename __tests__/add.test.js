// add.test.js
const add = require('../add.js'); // Importe la fonction add depuis le fichier add.js

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});