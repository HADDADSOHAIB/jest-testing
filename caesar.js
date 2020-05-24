const cipher = (string, b = 0) => {
  const minLower = 'a'.charCodeAt();
  const minCaps = 'A'.charCodeAt();

  const codedNumber = (a) => {
    if (a >= minLower) {
      if (a + b < minLower + 26) {
        return a + b;
      }
      return minLower + ((a + b - minLower) % 26);
    }
    if (a >= minCaps) {
      if (a + b < minCaps + 26) {
        return a + b;
      } 
      return minCaps + ((a + b - minCaps) % 26);
    }
    return a;
  };

  const encrypt = () => {
    let ciph = string.split('').map(e => {
      e = e.charCodeAt();
      return e;
    });
    ciph = ciph.map(e => {
      e = String.fromCharCode(codedNumber(e));
      return e;
    });
    return ciph.join('');
  };

  return { encrypt };
};
module.exports = cipher;