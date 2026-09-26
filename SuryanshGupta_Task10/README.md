In this task, I replicated the animation effect as shown in video in previously designed laundary webpage to make it more interactive and visually interesting.

For this task, I created two files: index.html and style.css and linked style.css to index.html using <link> element inside head tag. This allowed the external styling to webpage.

In previous task, I made the laundary webpage responsive and added the hover effect to booking button to make it more interactive. In this task, added the animation effect for the image in the hero section which can get attention easily.

For animation effect used the @keyframes rule in CSS with name as orbit in style.css . I defined different animation stages using percentages like 0%, 15%, 30%, 45%, 60%, 75%, 90% and 100% for proper animation. At these stages, I changed the image position using the transform property with translate() to move the image and scale() to squeeze the image. This created a smooth moving and squeezing/stretching image similar to the reference video.

Then in style.css, in img used the animation property define the name of animation i.e., orbit , animation duration, ease-in-out to make the animation movement smooth at the beginning and the end of each transition, and used infinite to continuously run the animation. This animation applied in different screen views while maintaining the responsiveness of the webpage.

Through this task, I understood how to use CSS animations, @keyframes, transform, translate(), and scale() to create interactive visual effects.

To run this project, open it in VS Code and install live server extension. Then on bottom right corner click on Go Live then the page will open in browser and displayed the webpage with the image continuously moves around its animation path with a squeezing effect at certain points.