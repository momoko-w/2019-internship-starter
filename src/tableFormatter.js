//Format the multiplication table output to align the numbers evenly, accounting for numbers having different numbers of digits

function format(table) {
  const tableText = table.map(function(row) {
    return row.join(" ");
  });

  return "\n" + tableText.join("\n") + "\n";
}

module.exports = { format };
