let arr = [4, 8, 2, 11, 6, 7, 10];

//Named Function
function maxNumber(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Maximum Number is:", maxNumber(arr));

//Anonymous Function
let sumOfNumber = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Sum of Numbers:", sumOfNumber(arr));

//Arrow Function
let countOdd = (arr) => {
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            c++;
        }
    }
    return c;
}
console.log("Count of Odd Numbers:", countOdd(arr));

console.log("Another Example:")
let nums = [1, 2, 4, 9, -5, 7, -2, 3];

console.log("Maximum Number is:", maxNumber(nums));
console.log("Sum of Numbers:", sumOfNumber(nums));
console.log("Count of Odd Numbers:", countOdd(nums));