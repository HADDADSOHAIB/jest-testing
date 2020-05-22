const reverseString = require('./reverseString');

test('return "" when an empty strin is giving', () => {
  expect(reverseString('')).toBe('');
});

test('return reversed string when a string is giving', () => {
  expect(reverseString('valid string')).toBe('gnirts dilav');
});