const assert = require('assert');
const { add } = require('./index');

assert.strictEqual(add(5, 3), 8);
assert.strictEqual(add(10, 20), 30);
assert.strictEqual(add(-5, 5), 0);

console.log("All tests passed successfully!");
