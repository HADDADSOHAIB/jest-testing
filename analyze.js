const analyze = (arr = []) => {
  if (arr.length === 0) {
    return {};
  }
  const avg = arr.reduce((memo, item) => item + memo, 0) / arr.length;
  const min = arr.reduce((memo, item) => (memo < item ? memo : item), arr[0]);
  const max = arr.reduce((memo, item) => (memo > item ? memo : item), arr[0]);
  return {
    average: avg,
    min,
    max,
    length: arr.length,
  };
};

module.exports = analyze;
