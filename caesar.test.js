const cipher = require('./caesar');

test('abc', () => {
  expect(cipher('abc', 3).encrypt()).toBe('def');
});

test('xyz', () => {
  expect(cipher('xyz', 3).encrypt()).toBe('abc');
});

test('XYz', () => {
  expect(cipher('XYz', 3).encrypt()).toBe('ABc');
});

test('Hello World,. @@@@@ ###|@5234987873 !', () => {
  expect(cipher('Hello World,. @@@@@ ###4@5234987873 !', 3).encrypt()).toBe('Khoor Zruog,. @@@@@ ###4@5234987873 !');
});
