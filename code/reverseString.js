function reverseString(string){
  if(typeof(string)!=='number' && typeof(string)!=='string') return;
  if(typeof(string)=='number') string = string.toString();
  string = string.split('');
  string.reverse();
  console.log(string)
  string = string.join("");
  return string;
}

module.exports = reverseString;