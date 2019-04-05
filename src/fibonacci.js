function getSequence(n) {
  // TODO: Generate a sequence of Fibonacci numbers
  var fibNumbers = [1], intNew = 1, intOld = 0, intZ, i;

  //loop through n times to get sequence of length n
  for (i = 0; i <= n-2; i++) {
    //store current temporarily, update current number, store previous current as old
    intTemp = intNew;
    intNew = intNew + intOld;
    intOld = intTemp;

    fibNumbers.push(intNew);

  }
  //console.log(fibNumbers)
  return fibNumbers;
}

module.exports = {
  getSequence
};
