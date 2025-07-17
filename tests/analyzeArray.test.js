const analyseArray = require('../src/analyzeArray.js')

test ('This will split the array', () => {
    expect(analyseArray([1,8,3,4,2,6])).toBe(1, 8, 3, 4, 2, 6)
})