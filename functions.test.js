// import capitalize from './functions';
const capitalize = require('./functions');

test('return "" when an empty strin is giving', () => {
  expect(capitalize('')).toBe('');
});
