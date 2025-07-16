function reverseString(string) {
    const array = string.split("");

    const reversedArray = array.reverse();

    const reversedString = reversedArray.join('');
    return reversedString;
};

module.exports = reverseString;