const cipher = require('../src/caesarCipher.js')

test ('This text will wrap', () => {
    expect(cipher('xyz', 4)).toBe('bcd');
})

test ('The capitilized letters will remain', () => {
    expect(cipher('xYz', 3)).toBe('aBc');
})

test ('The exclamation will stay', () => {
    expect(cipher('Hello!', 3)).toBe('Khoor!');
})

