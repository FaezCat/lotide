// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

const findKey = function(object, callback) {
  const keyList = Object.keys(object);
  for (const key of keyList) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// const actual = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 4 }
// }, x => x.stars === 4); // => "noma"

// assertEqual(actual, "Akelarre");