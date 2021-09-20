let tail = function(array) {
  let returnArray = [];
  for (let i = 1; i < array.length; i++) {
    returnArray.push(array[i]);
  }
  return returnArray;
};

module.exports = tail;