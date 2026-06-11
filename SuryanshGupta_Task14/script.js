let n = 12;
let i;
let s = 0;
for (i = 1; i <= n; i++) {
    s += i;
}
console.log("The sum of first", n, "numbers is: ", s);

console.log("Table of", n);
let product = 1;
for (i = 1; i <= 10; i++) {
    product = n * i;
    console.log(n + " X " + i + " = " + product);
}

console.log("Checking Prime Number:");
if (n === 1) {
    console.log("It is not a Prime Number.")
}
i = 2;
let c = 0;
while (i <= n) {
    if (n % i === 0) {
        c++;
    }
    i++;
}
if (c === 1) {
    console.log(n + " is a Prime Number.");
}
else {
    console.log(n + " is not a Prime Number.")
}

let j = 1;
console.log("Factors of " + n + " are:");
while (j <= n) {
    if (n % j === 0) {
        console.log(j)
    }
    j++;
}

let digit = 139;
let m = digit;
let sum = 0;
while (digit != 0) {
    sum += digit % 10;
    digit = Math.floor(digit / 10);
}
console.log("The Sum of all digits of", m, "is", sum);

console.log("Checking Armstrong number:");
let number = 153;
let num = number;
m = number
sum = 0;
c = 0;
while (m != 0) {
    c++;
    m = Math.floor(m / 10);
}
while (num != 0) {
    sum += (num % 10) ** c;
    num = Math.floor(num / 10);
}
if (sum === number) {
    console.log(number + " is a Armstrong Number.");
}
else {
    console.log(number + " is not a Armstrong Number.");
}