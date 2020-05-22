const analyze = require('./analyze');

test('return the analyses of an array', () => {
  expect(analyze([1, 1, 2, 2, 3, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 6,
  });
});

test('return tempty object if an empty array is giving', () => {
  expect(analyze([])).toEqual({});
});