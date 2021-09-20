const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

describe("#tail", () => {
  it("should return [1, 2]", () => {
    assert.deepEqual(tail([0, 1, 2]), [1, 2]);
  });
});