const takeUntil = function(array, callback) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return output;
    } else {
      output.push(array[i]);
    }
  }
  return output;
};

module.exports = takeUntil;

// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2, 1, 2]);