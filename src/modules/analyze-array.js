export default function analyzeArray(array) {
  const sum = array.reduce((accumulator, element) => accumulator + element);

  const objectWithArrayAnalysis = {
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  return objectWithArrayAnalysis;
}
