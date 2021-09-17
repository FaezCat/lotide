// CODE FOR CHECKING EACH STRING AS WELL

// const takeUntil = function(array, callback) {
//   let output = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > 1) {
//       for (let j = 0; j < array[i].length; j++) {
//         if (callback(array[i][j])) {
//           return output;
//         }
//       }
//       output.push(array[i]);
//     } else {
//       if (callback(array[i])) {
//         return output;
//       } else {
//         output.push(array[i]);
//       }
//     }
//   }
//   return output;
// };

// const data1 = [1, 2, 5, 7, 2, 1, 2, -4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// const data2 = ["I've", "been", "to", "Hollywood", "I've", "been", "to", ",", "Redwood"];

// const assertArraysEqual = function(actual, expected) {
//   if (!eqArrays(actual, expected)) {
//     return console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
//   } else {
//     return console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
//   }
// };

// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

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

// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2, 1, 2]);