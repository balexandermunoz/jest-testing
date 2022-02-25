const capitalize = require('../code/capitalize')

// Capitalize
test('Capitalize ex1 hello', () => {
  expect(capitalize('hello')).toBe('Hello')
})

test('Capitalize ex2 welcome', () => {
  expect(capitalize('welcome')).toBe('Welcome')
})

test('Capitalize letter a', () => {
  expect(capitalize('a')).toBe('A')
})

test('Capitalize prhase ', () => {
  expect(capitalize('hi mutherfukers')).toMatch(/Hi/)
})

test('Capitalize something different',() => {
  expect(capitalize()).toBe()
  expect(capitalize(2)).toBe(2)
})