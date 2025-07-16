const Calculator = require('../src/calculator.js')

const calculate = new Calculator;

test ('Addition method', () => {
    const result = calculate.add(2, 2);
    expect(result).toBe(4);
})

test ('Subtraction method', () => {
    const result = calculate.sub(6, 2);
    expect(result).toBe(4);
})

test ('Multiplication method', () => {
    const result = calculate.multiply(2, 2);
    expect(result).toBe(4);
})

test ('Division method', () => {
    const result = calculate.divide(8, 2);
    expect(result).toBe(4);
})