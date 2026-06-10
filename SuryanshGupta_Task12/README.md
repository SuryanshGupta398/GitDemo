In this task, I have created a JavaScript program that calculates compound interest based on static values.

Firstly, I have created two files index.html and script.js. In index.html, inside body tag use the <script> tag and using src link to script.js.

In script.js, using let create the variables like Principal, rate, n and time then give each variable the static values. Then, create the variable Amount assign it the formula to calculate Amount using operators.

Amount = Principal * (1 + (rate / n)) ** (n * time)

Then we have to calculate the compound interest so it's formula is:

CompoundInterest = Principal - Amount

And then using console.log() display the Compound Interest and using .toFixed(2) fix the decimal place upto two decimal.

To run this project, open it in VS Code and install live server extension and then on bottom right corner click on Go Live and then browser window will open then right click on it then there is option Inspect click on it then on top left there is option console click on it then the output will display there.