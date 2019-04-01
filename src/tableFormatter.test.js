const { format } = require("./tableFormatter");

test("format takes a table and makes a string", () => {
  const tableData = [[0, 1, 2, 3], [1, 1, 2, 3], [2, 2, 4, 6], [3, 3, 6, 9]];
  const formattedTableString = format(tableData);
  expect(formattedTableString).toBe(
    `
0 1 2 3
1 1 2 3
2 2 4 6
3 3 6 9
`
  );
});

test("format takes account for two digit numbers with padding", () => {
  const tableData = [
    [0, 1, 2, 3, 4],
    [1, 1, 2, 3, 4],
    [2, 2, 4, 6, 8],
    [3, 3, 6, 9, 12],
    [4, 4, 8, 12, 16]
  ];
  const formattedTableString = format(tableData);
  expect(formattedTableString).toBe(
    `
 0  1  2  3  4
 1  1  2  3  4
 2  2  4  6  8
 3  3  6  9 12
 4  4  8 12 16
`
  );
});

test("format takes account for three digit numbers with padding", () => {
  const tableData = [
    [0, 1, 5, 10],
    [1, 1, 5, 10],
    [5, 5, 25, 50],
    [10, 10, 50, 100]
  ];
  const formattedTableString = format(tableData);
  expect(formattedTableString).toBe(
    `
  0   1   5  10
  1   1   5  10
  5   5  25  50
 10  10  50 100
`
  );
});
