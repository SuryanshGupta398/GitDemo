In this task, I replicated the hover effect as shown in video in previous designed laundary webpage to make it more interactive and visually interesting.

For this task, I created two files: index.html and style.css and linked style.css to index.html using <link> element inside head tag. This allowed the external styling to webpage.

In previous task, I made the laundary webpage responsive. In this task, added the hover effect to booking button to make it more interactive .

For hover effect, used the :hover pseudo class in button. I used the transform property to tilt and increase the size of button. To tilt the button used the rotate() function with negative degree value which rotate the button in backward direction. I use the scale() function to increase the size of button when mouse hover over it. Applied the same in media queries to show hovering effect in different screens.

Now for smooth hover effect, I used the transition property in button. I set the transition duration to 1 second and use transition-property: all so that it apply to all properties. 

Through this task, I learned the concept of hovering, transform and transition to make webpage interactive.

To run this project, open it in VS Code and install live server extension. Then on bottom right corner click on Go Live then the page will open in browser and displayed the webpage, when mouse hover the button its size will increase and button will tilt smoothly.