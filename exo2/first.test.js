//first.test.js
const { first } = require('./firstLastChunkJoin');

test('first: retourne undefined si n non fourni, i.e. premier élément', () => {
  expect(first([1,2,3])).toBe(1);
});

test('first: retourne les 2 premiers éléments si n=2', () => {
  expect(first([1,2,3,4], 2)).toEqual([1,2]);
});

test('first: retourne [] si array null', () => {
  expect(first(null, 2)).toEqual([]);
});

test('first: retourne [] si n <= 0', () => {
  expect(first([1,2,3], 0)).toEqual([]);
});
