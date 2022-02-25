const analyzeArray = require('../code/analyzeArray')

// analyzeArray:
it('analyzeArray length 0', () =>{
  expect(analyzeArray([]).length).toBe(0)
})

it('analyzeArray length 2', () => {
  expect(analyzeArray([1,2]).length).toBe(2)
})

it('analyzeArray average 1', () => {
  expect(analyzeArray([1,1]).average).toBe(1)
})

it('analyzeArray average float', () => {
  expect(analyzeArray([1,1,2,2]).average).toBe(1.5)
})

it('analyzeArray negative average', () => {
  expect(analyzeArray([1,1,-2,-2]).average).toBe(-0.5)
})

it('analyzeArray min 0', () => {
  expect(analyzeArray([0,1,2,3,4]).min).toBe(0)
})

it('analyzeArray min -10', () => {
  expect(analyzeArray([-10,-1,0,3,4,10]).min).toBe(-10)
})

it('analyzeArray max 0', () => {
  expect(analyzeArray([0,-1,-2,-3,-4]).max).toBe(0)
})

it('analyzeArray max 100', () => {
  expect(analyzeArray([100,10,-2,-3,-4,10.56]).max).toBe(100)
})