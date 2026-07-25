In this task, I have developed a user interface for a login page using HTML and CSS(FlexBox) that aims to provide a visually appealing and user-friendly experience to individuals attempting to log in a system.

Firstly, I have created two files index.html and style.css . In index.html, using link tag in head to link the style.css to the index.html page.

Now inside body tag, create div with class name as main for its styling use display as flex and height as 100vh. Inside it, created two div with class name as left and right respectively.

In left div, use the img tag and place the image. In CSS, use the flex property and adjust the content in the center, use flex basis 50% so that only 50% space was taken by the left div and fix the background color as blue. Also adjust the image.

In right div, create another div with class name as login-box. For right div,in CSS use display as flex, use flex basis 50% so that only 50% space was taken by it, align the items in the center. For login-box, use the display as flex with direction as column and align it center, give the height and width. I have created this div so that all the content is correctly placed. 

Inside it, use h1 tag for heading in CSS give the color as black and align it in center, p tag with class name as welcome give color and align it in center.

Then use the form tag so that user can fill the form, in CSS use the display as flex with direction as column. Inside it, use the label for field name and input for the user information, in input use the placeholder for showing the hint to user what to write. For email field use type as email and for password field use type as password, both the fields are required. In CSS, for input give the required styling, use input:focus with outline as none so that user click the input field no outline is shown as it not looks good, and for label also give the color.

Then in form tag use the anchor tag (with class name as forgot) so to make forgot password as clickable. For its styling, use text-decoration as none, give color and text align as end. After anchor tag, use the button tag with type as submit and text as Login so that when user click it, the user logins the website. For its styling, give the color and background color, with other required styling so it looks good and used cursor as pointer.

After form tag, use p tag with class name as register for its styling give color align it in center. Inside it, write Register Now in span tag for its styling give color, and cursor as pointer.

In this task, i have learned the basic CSS properties and how to use flexbox to make the webpage look appealing.

To run this project, open it in VS Code and install live server extension. Then, open index.html in bottom right corner click on Go Live then the page will open in browser and show the developed webpage. 