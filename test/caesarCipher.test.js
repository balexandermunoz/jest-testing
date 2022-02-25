const caesarCipher = require('../code/caesarCipher')

// caesarCipher
it('caesarCipher one shift letter', () =>{
  let shiftedAlphabet = "bcdefghijklmnopqrstuvwxyza".split("");
  shiftedAlphabet.forEach( (val,i) => {
    expect(caesarCipher(String.fromCharCode(i+97),key=1) ).toBe(val)
  })
})

it('caesarCipher two shift letter', () =>{
  let shiftedAlphabet = "cdefghijklmnopqrstuvwxyzab".split("");
  shiftedAlphabet.forEach( (val,i) => {
    expect(caesarCipher(String.fromCharCode(i+97),key=2) ).toBe(val)
  })
})


it('caesarCipher -2 shift letter', () =>{
  let shiftedAlphabet = "yzabcdefghijklmnopqrstuvwx".split("");
  shiftedAlphabet.forEach( (val,i) => {
    expect(caesarCipher(String.fromCharCode(i+97),key=-2) ).toBe(val)
  })
})

it('caesarCipher two letters shifted 1', () =>{
  expect(caesarCipher('ab')).toBe('bc')
  expect(caesarCipher('az')).toBe('ba')
})

it('caesarCipher phrase shifted 1', () =>{
  expect(caesarCipher('ab cd')).toBe('bc de')
})

it('caesarCipher phrase with punctuation', () =>{
  expect(caesarCipher('ab cd!?%')).toBe('bc de!?%')
})