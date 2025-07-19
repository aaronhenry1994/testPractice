function analyseArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;

    let sorted = arr.toSorted();
    const min = sorted[0];
    const max = sorted[sorted.length - 1];
    const length = arr.length;
    
    return { average, min, max, length};
};

array = [1,8,3,4,2,6]
analyseArray([1,8,3,4,2,6]);

const object = analyseArray([1,8,3,4,2,6]);
console.log(object.average);
console.log(object.min);
console.log(object.max);
console.log(object.length);

module.exports = analyseArray;