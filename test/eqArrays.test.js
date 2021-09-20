const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays(["string", 4, 3], ["string", 4, 3]), true);