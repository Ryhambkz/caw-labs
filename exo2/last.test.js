// last.test.js
const { last } = require('./firstLastChunkJoin');

test('last: retourne dernier élément si n non fourni', () => {
  expect(last([1,2,3])).toBe(3);
});

test('last: retourne les 2 derniers si n=2', () => {
  expect(last([1,2,3,4], 2)).toEqual([3,4]);
});

test('last: retourne [] si array null', () => {
  expect(last(null, 2)).toEqual([]);
});

test('last: si n plus grand que la longueur retourne tout', () => {
  expect(last([1,2], 5)).toEqual([1,2]);
});
