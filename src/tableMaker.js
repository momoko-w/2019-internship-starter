function multiplication(list) {
  const row1 = [0, ...list];
  const matrix = [row1];

  for (const multiplier of list) {
    const row = list.map(x => x * multiplier);
    row.unshift(multiplier);
    matrix.push(row);
  }

  return matrix;
}

module.exports = {
  multiplication
};
