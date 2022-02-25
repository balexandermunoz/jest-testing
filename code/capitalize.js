function capitalize(word){
  if(typeof(word) !== 'string') return word 
  const arr = word.split("");
  arr[0] = arr[0].toUpperCase()
  const upperWord = arr.join("")
  console.log(upperWord)
  return upperWord;
}

module.exports = capitalize;