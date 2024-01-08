export default function reverse(string) {
  let newString = '';
  for (let i = string.length; i > 0; i -= 1) {
    newString += string.charAt(i);
  }
  return newString;
}
