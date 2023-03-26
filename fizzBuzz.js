function fizzBuzz(anyNumber) {
  if (anyNumber % 3 === 0 && anyNumber % 5 === 0) {
    return "FizzBuzz";
  }
  if (anyNumber % 3 === 0) {
    return "Fizz";
  }
  if (anyNumber % 5 === 0) {
    return "Buzz";
  } else {
    return anyNumber;
  }
}

module.exports = fizzBuzz;
