const reverseString = (str) => {
  if (!str.trim()) {
    return '';
  }

  return str.split('').reverse().join('');
};

module.exports = reverseString;