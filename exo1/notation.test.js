// notation.test.js
const { mention } = require('./notation');

test('mention retourne la bonne appréciation', () => {
  expect(mention(17)).toBe('Très Bien');   // >=16
  expect(mention(15)).toBe('Bien');        // >=14
  expect(mention(13)).toBe('Assez Bien');  // >=12
  expect(mention(10)).toBe('Passable');    // >=10
  expect(mention(8)).toBe('Insuffisant');  // <10
});
