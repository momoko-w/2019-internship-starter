//Format the multiplication table output to align the numbers evenly, accounting for numbers having different numbers of digits

//Note: table variable passed in is 2D array of rows
function format(table) {

  var stringRow = []; //since "row" is array of numbers

  //get value of last row and last column in the table -> greatest ("longest") number in table
  var longNum = table[table.length-1][table.length-1];

  //get maximum length of what numbers have to be padded up to
  var paddingLength = longNum.toString().length;

  //applying function below on each element of the 2D array (rows)
  const tableText = table.map(function(row) {

    //traverse through row elements
    for (var i = 0; i < row.length; i++) {

      var value = row[i].toString();

      //add padding spaces to string value
      while (value.length < paddingLength){
        value = " " + value;
      }

      stringRow[i] = value;
    }

    return stringRow.join(" ");   
  });

  return "\n" + tableText.join("\n") + "\n";
}

module.exports = { format };
