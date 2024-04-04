// const { default: test } = require("node:test");
const sum = require("./function");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(5, 7)).toBe(12);
});

test("6 + 6 to equal 12", () => {
  expect(sum(6, 6)).toBe(12);
});

test("adds 5 + 7 to equal 12", () => {
  expect(sum(5, 7)).toBe(12);
});
