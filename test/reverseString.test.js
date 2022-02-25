const reverseString = require('../code/reverseString')
// reverseString 
test('reverse a word', () => {
  expect(reverseString('hello')).toMatch(/olleh/)
  expect(reverseString('hi')).toMatch(/ih/)
})

test('reverse phrase', () => {
  expect(reverseString('hi mom')).toBe('mom ih')
  expect(reverseString(' i am ')).toMatch(' ma i ');
})

test('reverse something else', () => {
  expect(reverseString()).toBe();
})

test('reverse a number', () => {
  expect(reverseString(24)).toBe('42');
})