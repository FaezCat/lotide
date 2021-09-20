const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it('should return the middle value [3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});

describe("#middle", () => {
  it('should return the middle values [2, 3]', () => {
    assert.deepEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);
  });
});