function capitalize(string) {
    const array = string.split("");
    array[0] = array[0].toUpperCase();
    
    return array.join("");
};

console.log("Works")

module.exports = capitalize;