In this task, I have built a HTML page with design using CSS(Cascading Style Sheets) and learned the concept of CSS - Unites, Box Models, Fonts.

Firstly, I created two files: index.html and style.css and linked style.css to index.html using <link> element inside <head> tag. This allowed me to apply external styling to the webpage.

In index.html, inside body I added a div tag with a class name as "container" inside it I added an image of landscape and below it added a button for user interaction.

In style.css, firstly I used the universal selector '*' to remove the default margin and padding and applied 'box-sizing: border-box' so that padding and border are included within the elements total width and height.

Then I styled the 'body' section using viewport units ('vw' and 'vh') to make the webpage responsive according to the screen size and use the 'padding: 10vh 0' so that it creates vertical spacing without increasing scroll unnecessarily.

After that, I styled the '.container' class by giving it width using '50vw' and height using '80vh'. Left and right spacing using margins so proper alignment for displaying the image and button. Used 'margin: 0 25vw;' it means 0 margin from top and bottom as we already use the padding as 10vh in body and 25vw margin from left and right.

For the image styling, I set 'width: 100%' and height using viewport height units. This helped the image fit properly inside the container.

For the button styling, I added full width, for spacing not left between the image and button i use the margin-top as negative value so that the gap is not visible, font size using 'em', height using 'vh', White text color, Gradient background using 'linear-gradient', Cursor pointer effect for interaction.

Since container width is 50vw and left and right margins are 25vw, 25vw. So total = 50vw + 25vw + 25vw = 100vw.

Since container height is 80vh and top and bottom padding are 10vh, 10vh. So total = 80vh + 10vh +10vh = 100vh.

This task helped me improve my understanding of webpage structure and responsive CSS designing.

To run this project, open it in VS Code and install live server extension and on bottom right corner click Go live and then on browser it will open the page and display the full styled HTML page.
