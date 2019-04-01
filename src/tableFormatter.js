function format(table) {
  const tableText = table.map(function(row) {
    return row.join(" ");
  });

  return "\n" + tableText.join("\n") + "\n";
}

module.exports = { format };
