const without = function(array1, array2) {
  let newArray = [];
  for (let elm of array1) {
    if (!array2.includes(elm)) {
      newArray.push(elm);
    }
  }
  console.log(newArray);
};

module.exports = without;

// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);