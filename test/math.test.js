import test from 'node:test';
import assert from 'node:assert/strict';
import { add, isEven, multiply } from '../src/math.js';

test('add soma dois números', () => {
  assert.equal(add(2, 3), 5);
});

test('isEven retorna true para pares', () => {
  assert.equal(isEven(4), true);
});