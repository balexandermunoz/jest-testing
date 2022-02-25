const calculator = require('../code/calculator')

// Calculator
it('calculator: sum', () => {
  expect(calculator.add(2,2)).toBe(4);
  expect(calculator.add(-2,2)).toBe(0);
  expect(calculator.add(2.23,0)).toBe(2.23);
})

it('calculator: sub', () => {
  expect(calculator.sub(2,2)).toBe(0)
})

it('calculator: mul', () => {
  expect(calculator.mul(2,2)).toBe(4)
  expect(calculator.mul(0,2)).toBe(0)
  expect(calculator.mul(-2,1)).toBe(-2)
  expect(calculator.mul(2,0.5)).toBe(1)
})

it('calculator: div', () =>{
  expect(calculator.div(1,1)).toBe(1)
  expect(calculator.div(1,2)).toBe(0.5)
  expect(calculator.div(1,0)).toBe(Infinity)
  expect(calculator.div(16,-2)).toBe(-8)
})