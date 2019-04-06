function getSequence(n) {
  // TODO: Generate a sequence of Fibonacci numbers
  var fibNumbers = [1], intNew = 1, intOld = 0, intZ, i;

  //loop through to calculate sequence
  for (i = 0; i < n-1; i++) {
    //store current temporarily, update current number, store previous current as old
    intTemp = intNew;
    intNew = intNew + intOld;
    intOld = intTemp;

    //add newly calculated digit to end of array
    fibNumbers.push(intNew);

  }
  //console.log(fibNumbers)
  return fibNumbers;
}

module.exports = {
  getSequence
};
