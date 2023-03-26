const fizzBuzz = require("./fizzBuzz");

describe("FizzBuzz", () => {
  it("should return 'Fizz' when a number is divided by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});
it("should return 'Buzz' when a number is divided by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  })
it("should return 'FizzBuzz' when a number is divided by 3 and by 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  })
it("should return a number when a number is not divided by 3 or by 5", () => {
    expect(fizzBuzz(7)).toBe(7);
  })
it("should not return 'FizzBuzz' when a number is < 15", () => {
    expect(fizzBuzz(12)).not.toBe("FizzBuzz");
  })
it("should not return 'Fizz' when a number is divided by 5", () => {
    expect(fizzBuzz(10)).not.toBe("Fizz");
  })
it("should not return 'Buzz' when a number is divided by 3", () => {
    expect(fizzBuzz(12)).not.toBe("Buzz");
  })
});