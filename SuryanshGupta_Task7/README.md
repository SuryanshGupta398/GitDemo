In this task, I designed a responsive laundary webpage using media queries to make the webpage suitable for different screens.

For this task, I created two files: index.html and style.css and linked style.css to index.html using <link> element inside <head> tag. This allowed to apply the external styling to webpage.

Now inside body tag, create two div's first div contains the navbar and second div contains the content.

In first div, give the class name as navbar. Inside it, use the span tag for logo(class as logo) and username(class as username) and use the unordered list inside each list element use anchor tag for navigation links.

For its styling, used the * (universal selector) to set the margin, padding to 0 and box-sizing as border-box and give font family as sans-serif to whole page. Then, give the height to body and in navbar use the display as flex to properly arrange the elements with other styling in navbar class to look it good.

In second div, give the class name as hero. Inside it, created two div's one class name as left-div and other as right-div. 

In left-div, write the heading and paragraph related to laundary webpage and created a button to book a service. In right-div, use the img tag to display the image related to laundary.

For its styling, in left-div use the display as flex, give the flex-direction as column so the elements inside left-div arranged vertically and set the other elements style. In right div, use the display as flex to properly position the image.

Now for responsiveness, use the media queries. For tablet, give the min-width as 768px and max-width as 1024px inside this, adjusted the size, spacing, image dimensions and layout so that whole content fit properly on tablet screens. 

For mobile, give the max-width as 426px inside this make the hero class display as flex and its direction is column so that left-div and right-div arrange vertically in smaller screens and adjusted the size, spacing to make the webpage fit properly on mobile devices. In navbar class, make the unordered list display as none so that the navigation links are hidden on mobile while the logo and username remain visible.

In this task, I have learned how to use CSS Flexbox and media queries to create a responsive webpage that adapt its layout and styling according to different screen sizes.

To run this project, open it in VS Code and install live server extension. Then, open index.html on bottom right corner click on Go Live then the page will open in web browser showed the developed page.