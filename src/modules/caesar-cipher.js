export default function caesarCipher(string, shift) {
  let encryptedString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string.charAt(i).match(/[a-z]/)) {
      let shiftedCharacterCode = string.charCodeAt(i) + shift;
      if (shiftedCharacterCode > 122) {
        shiftedCharacterCode -= 26;
      }
      encryptedString += String.fromCharCode(shiftedCharacterCode);
    } else if (string.charAt(i).match(/[A-Z]/)) {
      let shiftedCharacterCode = string.charCodeAt(i) + shift;
      if (shiftedCharacterCode > 90) {
        shiftedCharacterCode -= 26;
      }
      encryptedString += String.fromCharCode(shiftedCharacterCode);
    } else {
      encryptedString += string.charAt(i);
    }
  }
  return encryptedString;
}
