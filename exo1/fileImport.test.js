// fileImport.test.js
const { sum, multiply } = require('./fileImport');

test('sum additionne correctement', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(10, 15)).toBe(25);
});

test('multiply multiplie correctement', () => {
  expect(multiply(2, 4)).toBe(8);
  expect(multiply(5, 5)).toBe(25);
});
