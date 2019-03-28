function format(table) {
  const tableText = table.map(row => row.join(" "));

  return "\n" + tableText.join("\n") + "\n";
}

module.exports = { format };
