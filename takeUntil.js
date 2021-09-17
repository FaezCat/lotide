const takeUntil = function(array, callback) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 1) {
      for (let j = 0; j < array[i].length; j++) {
        if (callback(array[i][j])) {
          return output;
        }
      }
      output.push(array[i]);
    } else {
      if (callback(array[i])) {
        return output;
      } else {
        output.push(array[i]);
      }
    }
  }
  return output;
};

// const data1 = [1, 2, 5, 7, 2, 1, 2, -4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", "I've", "been", "t,o", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);