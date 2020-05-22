// import capitalize from './functions';
const capitalize = require('./capitalize');

test('return "" when an empty strin is giving', () => {
  expect(capitalize('')).toBe('');
});

test('return capitilize string when a string is giving', () => {
  expect(capitalize('valid string')).toBe('Valid string');
});

test('return capitilize char when a char is giving', () => {
  expect(capitalize('v')).toBe('V');
});

test('return the same string when a string starting with a number is giving', () => {
  expect(capitalize('9valid string')).toBe('9valid string');
});
