// const findKeyByValue = function(object, value) {
//   const valuesList = Object.values(object);
//   const keysList = Object.keys(object);
//   for (let i = 0; i < valuesList.length; i++) {
//     if (valuesList[i] === value) {
//       return keysList[i];
//     }
//   }
// };

const findKeyByValue = function(object, value) {
  const keysList = Object.keys(object);
  for (const key of keysList) {
    if (object[key] === value) {
      return key;
    }
  }
};