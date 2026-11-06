const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Division by zero is not allowed.");
        }
        else {
            resolve(num1 / num2);
        }
    });
};

divide(10, 2)
    .then(result => console.log("Result:", result))
    .catch(error => console.log(error));

divide(7, 2)
    .then(result => console.log("Result:", result))
    .catch(error => console.log(error));

divide(1, 3)
    .then(result => console.log("Result:", result))
    .catch(error => console.log(error));

divide(10, 0)
    .then(result => console.log("Result:", result))
    .catch(error => console.log(error));

divide(25, 0)
    .then(result => console.log("Result:", result))
    .catch(error => console.log(error));
