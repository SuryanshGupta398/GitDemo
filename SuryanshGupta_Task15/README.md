In this task, I have created JavaScript functions that receive an array as argument and perform various operations on it, including finding the maximum number, calculating the sum of all elements, and counting the number of odd numbers.

Firstly, I have created two files index.html and cript.js. In index.html, inside body tag use <script> tag and using src link to script.js.

In script.js, using let defined the array. Now, for performing 3 operations on array using function. So I am using Named function, Anonymous function and Arrow function.

Firstly, finding the maximum number in the array for this using Named function. Write the syntax for it and accept the parameter, inside function using let defined the variable as max = arr[0] that means assuming the first element in array is maximum. After that, using for loop to traverse the array, inside it using if (arr[i]>max) then assign max=arr[i] that means if any other number in the array is greater than max then assign it to max, this will continue till loop ends. After that, returning the max value. After the function using console.log() printing the max value.

Now, finding the sum of all the numbers of the array for this using Anonymous function. Using let defined the variable as sumOfNumber, which is equal to the function accepting array as parameter. Inside the function, using let defined variable sum=0, after that using for loop inside this sum+=arr[i] that means on each iteration adding the numbers of the array. After for loop, returning sum. Then outside the function using console.log() printing the sum.

Now for counting the odd number in the array for this using Arrow function. Using let defined the variable countOdd which is equal to parenthesis accepting array as parameter. Then after that applying curly brackets. Inside it using let defined the variable c=0. After that, using for loop inside this using if(arr[i]%2!==0) then increment c by 1. The logic is that if number is odd then it is not divisible by 2 i.e., remainder is not 0. After loop ends, returning c. After the function using console.log() printing the count of odd numbers.

In last, take another example of array, the variable is nums and it is passing through different functions as parameter and getting the result of each operation. This shows the functions are reusable, that means only write the function once and then pass the parameter and run as many time as we want.

To run this project, open it in VS Code and install the Live Server extension.After that, on bottom right corner there is option Go Live click on it. Then the browser window will open right click on it then there is option Inspect click on it. Then on top right corner there is option Console click on it then output will display there.