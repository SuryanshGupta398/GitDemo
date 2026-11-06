In this task, I designed a simple webpage with interactive elements. The webpage include a header with greeting message, four boxes with different text named red, blue, green, and yellow, an input field to get the user's name, and a button to greet the user.

For this task, I created three files index.html, style.css and script.js. In index.html, link the style.css using <link> tag inside head tag. Inside the body tag, link the script.js using <script> tag.

Now inside body tag, create a div with class as container style it as flex with direction as column with some gap. Inside it, I created three divs, first div class name as top with styling as give some height, background-color, text-align as center and align-content center to center the content, it displays the greeting text. Inside it, h2 tag with id as text to display the text.

Second div class name as middle with styling as display flex with some gap and justify-content center to make all the boxes in center. Inside it, there are four boxes, with class as box with styling as border of 1px solid, give some padding, and the cursor as pointer. This div contains the boxes with color name inside it.

Third div class name as bottom with styling as text align as center to make the content in the center. Inside it, input field is there with id as name and with placeholder for its styling give some padding. Next to it there is button with id as greet and text as Greet for its styling give some padding, background-color and cursor as pointer.

Now in script.js, I used document.getElementById() to access the HTML elements through their IDs. Firstly, I selected the input field, greeting text, and Greet button. I stored the original greeting message in a variable. Then I used the addEventListener() method with a click event on the button to dynamically update the greeting message by adding the user's entered name for changing the text I used the innerText.

Next, I created an array containing the four color names: red, blue, green, and yellow. I used the forEach() method to iterate through the array and select each corresponding color box using getElementById(). Then, I added a click event listener to each box. Whenever a user clicks on a box, its background color changes according to its name using box.style.backgroundColor=colorname. I also used an if-else condition to change the text-color to white, while keeping the text black for yellow color. We can also individually change the color of the box using there IDs, in script.js the code is commented. I used forEach to remove the code repetition.

Through this task, I understand the concept of the DOM manipulation and event handling and how to dynamically change the webpage content and styles.

To run this task, open it in VS Code install the live server extension. Then, on the bottom right side corner click on Go Live then the webpage will open on browser. Enter the name click on Greet button then the name will show on top. Now, click the boxes, the box color will change according to color written on the box.