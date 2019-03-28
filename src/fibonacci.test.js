const { getSequence } = require("./fibonacci");

test("getSequence of 5 returns first 5 of fibonacci", () => {
  expect(getSequence(5)).toEqual([1, 1, 2, 3, 5]);
});

test("getSequence of 10 returns first 10 of fibonacci", () => {
  expect(getSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

xtest("getSequence of 20 returns first 20 of fibonacci", () => {
  const twentythElement = getSequence(20)[19];
  expect(twentythElement).toEqual(6765);
});
