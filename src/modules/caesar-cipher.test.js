import { expect, test } from 'vitest';
import caesarCipher from './caesar-cipher';

test('encrypts correctly', () => {
  const encryptedString = caesarCipher('Te.st', 3);
  expect(encryptedString).toBe('Wh.vw');
});
