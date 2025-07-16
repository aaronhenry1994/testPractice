const capitalize = require('./capitalize.js');

test ('Capitilizes first letter', () => {
    expect(capitalize('string').toBe('String'))
})