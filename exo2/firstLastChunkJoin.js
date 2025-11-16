//firstLastChunkJoin.js

function first(array, n) {
  if (array == null || n <= 0) return [];
  if (n == null) return array[0];
  return array.slice(0, n);
}

function last(array, n) {
  if (array == null) return [];
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}

function joinStrings(array) {
  
  if (!Array.isArray(array)) return '';
  return array.join('');
}

function chunk(array, size) {
  if (!Array.isArray(array)) return [];
  if (size <= 0) return []; 
  var chunkedArr = [];
  var index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}

module.exports = { first, last, joinStrings, chunk };
