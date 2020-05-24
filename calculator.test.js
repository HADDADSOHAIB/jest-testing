const calculator = require('./calculator');

test('When given two numbers for add, will return its sum', () => {
  expect(calculator().add(5, 8)).toBe(13);
});

test('When given only one number for add it will return itself', () => {
  expect(calculator().add(5)).toBe(5);
});

test('When given two numbers for substract, will return its difference', () => {
  expect(calculator().substract(5, 8)).toBe(-3);
});

test('When given only one number for substract it will return itself', () => {
  expect(calculator().substract(5)).toBe(5);
});

test('When given two numbers for product, will return its product', () => {
  expect(calculator().product(-1, Infinity)).toBe(-Infinity);
});

test('When given two for product, will return its product', () => {
  expect(calculator().product(5, 5)).toBe(25);
});

test('When given only one number for product it will return itself', () => {
  expect(calculator().product(3)).toBe(3);
});

test('When a number divided by 0 it will return Infinity', () => {
  expect(calculator().divide(250, 0)).toBe(Infinity);
});

test('When two numbers are given for division. Divide them correctly.', () => {
  expect(calculator().divide(250, 10)).toBe(25);
});

test('When one number is given for division return itself', () => {
  expect(calculator().divide(250)).toBe(250);
});