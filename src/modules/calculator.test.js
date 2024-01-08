import { expect, test } from 'vitest';
import calculator from './calculator';

test('sum correctly', () => {
  const testSum = calculator.add(3, 3);
  expect(testSum).toBe(3 + 3);
});

test('subtracts correctly', () => {
  const testSub = calculator.subtract(3, 3);
  expect(testSub).toBe(3 - 3);
});

test('multiplies correctly', () => {
  const testMult = calculator.multiply(3, 3);
  expect(testMult).toBe(3 * 3);
});

test('divides correctly', () => {
  const testDiv = calculator.divide(3, 3);
  expect(testDiv).toBe(3 / 3);
});
