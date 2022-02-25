function caesarCipher(string, key=1){
  const arr = string.split('');
  const regex = /[!"#$%&'()*+, -./:;<=>?@[\]^_`{|}~]/;
  let newArr = [];
  arr.forEach( (val) =>{
    if(regex.test(val)) newArr.push(val)
    else newArr.push(shiftChar(val)) 
  })
  return newArr.join('')

  function shiftChar(char){
    let charCode = (char.charCodeAt(0) - 97 + key)%26;
    if(charCode<0) charCode = 26 + charCode;
    const newString = String.fromCharCode(charCode + 97)
    return newString
  }
}

module.exports = caesarCipher;