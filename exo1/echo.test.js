// echo.test.js
const { echo } = require('./echo');

test('echo retourne la même valeur', () => {
  // Test avec une chaîne de caractères
  expect(echo('hello')).toBe('hello');

  // Test avec un nombre
  expect(echo(123)).toBe(123);

  // Test avec une autre chaîne
  expect(echo('JS from server')).toBe('JS from server');
});
