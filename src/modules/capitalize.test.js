import { expect, test } from 'vitest';
import capitalize from './capitalize';

test('string is capitalized', () => {
  const result = capitalize('test');
  expect(result.charAt(0)).toMatch(/[A-Z]/);
});
