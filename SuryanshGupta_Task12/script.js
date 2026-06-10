let Principal = 100000;
let rate = 0.05;
let n = 12;
let time = 5;

let Amount = Principal * (1 + (rate / n)) ** (n * time);

let CompoundInterest = Amount - Principal;

console.log("The compound interest after", time, "years is:", CompoundInterest.toFixed(2));
