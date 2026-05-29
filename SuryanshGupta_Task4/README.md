In this task, I have built a HTML page with design using CSS(Cascading Style Sheets) and learned the concept of CSS - Unites, Box Models, Fonts.

For this task, I have created two files: index.html and style.css and linked style.css to index.html using <link> element inside <head> tag. This allowed me to apply external styling to the webpage.

In index.html, inside <body> I added a div tag with a class name as "container" inside it I added an image of landscape and below it added a button for user interaction.

In style.css, first I used the universal selector '*' to remove the default margin and padding from all the elements and applied 'box-sizing: border-box' so that padding and border are included within an elements total width and height.

Then, I styled the 'body' section using viewport units (vw and vh) to make the webpage responsive according to the screen size and use the 'padding: 10vh 0' to create the 10% spacing from top and bottom.

After that, I styled the .container class by giving it width as 50vw and height as 78vh (used height as lower to prevent scrolling). I Used margin: 0 25vw  it means 0 margin from top and bottom as we already use the padding as 10vh in body and 25vw margin from left and right. Used line-height as 0 so that there is no space between image and button.

For the image styling, I set width: 100% and used the viewport height units for the height of the image so that it fits perfectly in the container.

For the button styling, I added full width, used border as none because browsers add button border, applied a font size using em, set height using vh, applied text colour as white, for background of button used linear-gradient, cursor as pointer to indicate that button is clickable and for user interaction added the hovering effect on button to change colour.

Since container width is 50vw and left and right margins are 25vw, 25vw respectively.
Total = 50vw + 25vw + 25vw = 100vw.

Since container height is 78vh and top and bottom padding are 10vh, 10vh respectively.
Total = 78vh + 10vh +10vh = 98vh.

This task helped me in understanding the concept of CSS-unites, box-models, and fonts for creating the interactive webpages.

To run this project, open it in VS Code and install live server extension and on bottom right corner click Go live and then on browser it will open the page and display the full styled HTML page.