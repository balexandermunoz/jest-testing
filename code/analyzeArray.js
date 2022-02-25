function analyzeArray(arr){
  const currLength = arr.length;
  const aver = arr.reduce( (a,b) => a+b, 0)/currLength;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const obj = {
    average: aver,
    min: min,
    max: max,
    length: currLength,
  }
  return obj
}

module.exports = analyzeArray;