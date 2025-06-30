import { sum } from "./index.js";
import test from "node:test";
import assert from "node:assert";

test("Menjumlahkan 5 + 5 = 10", () => {
  assert.strictEqual(sum(5, 5), 10);
});

test("Menjumlahkan 4 + 5 = 9", () => {
  assert.strictEqual(sum(4, 5), 9);
});

test("Menjumlahkan 3 + 5 = 8", () => {
  assert.strictEqual(sum(3, 5), 8);
});
