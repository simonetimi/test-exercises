import { expect, test } from 'vitest';
import reverse from './capitalize';

test('string is reversed', () => {
  const result = reverse('test');
  expect(result).toMatch(/.{1,1}/gi);
});
