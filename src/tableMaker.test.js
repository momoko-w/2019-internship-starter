const { multiplication, power, add } = require("./tableMaker");

test("multiplication makes a multiplication table", () => {
  expect(multiplication([1, 2, 3])).toEqual([
    [0, 1, 2, 3],
    [1, 1, 2, 3],
    [2, 2, 4, 6],
    [3, 3, 6, 9]
  ]);
});

xtest("power makes a table with one number to the power of the other", () => {
  expect(power([2, 4, 6])).toEqual([
    [0, 2, 4, 6],
    [2, 4, 16, 36],
    [4, 16, 64, 4096],
    [6, 64, 4096, 46656]
  ]);
});

xtest("add makes a table with addition", () => {
  expect(add([2, 4, 6])).toEqual([
    [0, 2, 4, 6],
    [2, 4, 6, 8],
    [4, 6, 8, 10],
    [6, 8, 10, 12]
  ]);
});
