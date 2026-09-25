In this task, I developed a hamburger menu icon in mobile view of the laundary webpage to open the hidden navigation links from the right side. 

For this task, I created two files: index.html and style.css and link style.css to index.html using <link> element inside head tag. This allowed the external styling to webpage.

In previous task, I made the laundary webpage responsive. In this task, added the hamburger icon in mobile view to display the hidden links from the right side. 

For this, in index.html inside the navbar, I added the div with the class name as user. Inside it, placed the username, hamburger icon and a div with the class menu which contains the navigation links.

Now for its styling, make the display of hamburger and menu class as none in laptop and tablet view. In mobile view, give the navbar full width, added appropriate padding and margin. I changed the hamburger class display to block, remove its border, and set other properties. Make menu display as none and position absolute.

Then use the :focus pseudo class to click the icon and open the menu .hamburger:focus + .menu "+" indicates the adjacent sibling selector which is menu. So this means when the hamburger icon receives focus then the menu will open from right side. For it styling, make display as flex, its direction as column, keep its position fixed, at top:0 and right:0, justify-content and align-items center, some gap to properly arrange the navigation links and other properties.

Then in menu class, I changed links text decoration to none, color to white. And for looking navbar good make user class display as flex with align-items center with some gap. Sice the navbar already uses justify-content as space-between, this keeps the logo on left side while the username and hamburger icon stay together on the right.

Through this task, I understand the concept of :focus pseudo class and the adjacent sibling selector. I learned how to use them together to create a simple mobile view to make navigation link appears in the screen using HTML and CSS, without JavaScript.

To run this project, open it in VS Code and install live server extension. Then on bottom right corner click on Go Live then the page will open in browser and displayed the webpage, when click the hamburger icon then the navigation links will open from left side.