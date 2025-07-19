const analyseArray = require('../src/analyzeArray.js')

const object = analyseArray([1,8,3,4,2,6]);

test ('This will return the average', () => {
    expect((object.average)).toBe(4)
})

test ('This will return the min', () => {
    expect((object.min)).toBe(1)
})
test ('This will return the max', () => {
    expect((object.max)).toBe(8)
})

test ('This will return the length', () => {
    expect((object.length)).toBe(6)
})