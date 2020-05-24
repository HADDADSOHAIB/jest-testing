const calculator = () => {
  const add = (x = 0, y = 0) => x + y;

  const substract = (x = 0, y = 0) => x - y;

  const product = (x = 1, y = 1) => x * y;

  const divide = (x = 1, y = 1) => x / y;

  return {
    add,
    substract,
    product,
    divide,
  };
};

module.exports = calculator;