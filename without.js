// const assertArraysEqual = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return console.log(`Assertion Failed: [${array1}] !== [${array2}]`);
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return console.log(`Assertion Failed: [${array1}] !== [${array2}]`);
//     }
//   }
//   console.log(`Assertion Passed: [${array1}] === [${array2}]`);
// };

const without = function(array1, array2) {
  let newArray = [];
  for (let elm of array1) {
    if (!array2.includes(elm)) {
      newArray.push(elm);
    }
  }
  console.log(newArray);
};

// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);