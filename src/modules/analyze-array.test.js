import { expect, test } from 'vitest';
import analyzeArray from './analyze-array';

test('array is analyzed', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  const testObject = { average: 4, min: 1, max: 8, length: 6 };
  expect(object).toMatchObject(testObject);
});
