const { multiplication } = require("./tableMaker");

test("multiplication makes a multiplication table", () => {
  expect(multiplication([1, 2, 3])).toEqual([
    [0, 1, 2, 3],
    [1, 1, 2, 3],
    [2, 2, 4, 6],
    [3, 3, 6, 9]
  ]);
});
