In this task, I have created the JavaScript function that takes two numbers as input and perform division using Promises. It handles cases such as division by zero and return either the result or an appropriate error message.

For this task, I created two files index.html and script.js. In index.html, inside body tag, added the <script> tag and link it to script.js.

Now in script.js, I created an arrow function named divide that takes two number as input or parameters inside it return new Promise that has two parameters resolve and reject. Inside this promise, I used an if-else condition, if num2===0 then reject the promise with error message "Division by zero is not allowed", else the promise resolved using resolve(num1/num2), which return the result.

Now for testing purpose, I called the function five times using dummy values. For example, divide(10,2) after calling the function I write .then which is used when the promise is resolve inside it used arrow function to print the result of the division. After it, write the .catch which is used for handling the errors or reject cases, inside it write the arrow function to print the appropriate error message if the promise was reject. Similarly,I used for other four other sets of values, including a division-by-zero case.

Through this task, I understand how to use promise in Javascript functions and how to handle both the resolved or rejected cases using .then() and .catch().

To run this task, open it in VS Code install the live server extension, open the index.html page, on bottom corner right side there is option Go Live click on it, then the page will open on the browser right click on the page click inspect option or on keyboard click F12 and then in the panel click console the output will display there.