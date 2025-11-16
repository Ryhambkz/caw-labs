// notation.js
function mention(note) {
  if (note >= 16) return 'Très Bien';
  if (note >= 14) return 'Bien';
  if (note >= 12) return 'Assez Bien';
  if (note >= 10) return 'Passable';
  return 'Insuffisant';
}

module.exports = { mention };
