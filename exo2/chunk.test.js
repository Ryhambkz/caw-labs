// chunk.test.js
const { chunk } = require('./firstLastChunkJoin');

test('chunk: taille 2 sur [1,2,3,4,5] donne [[1,2],[3,4],[5]]', () => {
  expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
});

test('chunk: taille > longueur retourne tableau contenant l\'original', () => {
  expect(chunk([1,2,3], 10)).toEqual([[1,2,3]]);
});

test('chunk: array non tableau -> []', () => {
  expect(chunk(null, 2)).toEqual([]);
});

test('chunk: size <= 0 -> []', () => {
  expect(chunk([1,2,3], 0)).toEqual([]);
});
