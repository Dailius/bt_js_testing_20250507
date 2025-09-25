const { add } = require("../math");

test("Test from math.test.js", () => {
  console.log("Test is running");
});

test("Test_sum_of_5_and_3_expected_8", () => {
  // arrange
  const inputA = 5;
  const inputB = 3;
  const expectedResult = 8;

  // act
  const actualResult = add(inputA, inputB);

  // assert
  expect(actualResult).toBe(expectedResult);
});

test("Test_short_sum_of_5_and_3_expected_8", () => {
  expect(add(5,3)).toBe(8);
});
