const number = require("yargs").argv.number || 10;
const fibonnaci = require("./fibonacci");
const tableMaker = require("./tableMaker");
const tableFormatter = require("./tableFormatter");

function main() {
  const fibs = fibonnaci.getSequence(number);
  const table = tableMaker.multiplication(fibs);
  const text = tableFormatter.format(table);

  console.log(text);
}

main();
