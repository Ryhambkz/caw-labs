// join.test.js
const { joinStrings } = require('./firstLastChunkJoin');

test('joinStrings: ["Red","Green","White","Black"] -> "RedGreenWhiteBlack"', () => {
  expect(joinStrings(["Red","Green","White","Black"])).toBe("RedGreenWhiteBlack");
});

test('joinStrings: tableau vide -> ""', () => {
  expect(joinStrings([])).toBe("");
});

test('joinStrings: non-array -> ""', () => {
  expect(joinStrings(null)).toBe("");
});
