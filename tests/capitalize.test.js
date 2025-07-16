const capitalize = require('../src/capitalize.js');

test ('Capitilizes first letter', () => {
    expect(capitalize('string')).toBe('String')
})