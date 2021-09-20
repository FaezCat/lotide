const findKeyByValue = function(object, value) {
  const keysList = Object.keys(object);
  for (const key of keysList) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;