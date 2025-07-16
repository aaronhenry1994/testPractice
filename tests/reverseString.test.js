const reverseString = require('../src/reverseString.js');

test ('Reverses the string', () => {
    expect(reverseString('string')).toBe('gnirts')
});