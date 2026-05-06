In this task, I have built a HTML page with design using CSS(Cascading Style Sheets) and learned the concept of CSS selectors.

Firstly, I created two files: index.html and style.css and linked style.css to index.html using <link> element inside <head> tag. This allowed me to apply external styling to the webpage.

In style.css, I first added an orange background color to the entire body of the webpage to make the page more attractive.

Then in index.html, I divided the page with header and main section. Inside header write 3 different heading tags(<h1>,<h2>,<h4>) assigned all of them same class class="head". Then using class selector(.head) make text color as blue. In second heading with id="bglime" give background-color as green. I also placed the word “head” inside a <span> tag and used the span selector in CSS to change only that word’s text color to red, showing how specific text can be styled separately.

Now in index.html, inside main create section containing 3 paragraphs and style using only p element selector. In style.css, give p color as white. Then in second paragraph assigned id as para and in style.css, add #para as green color. In third paragraph, wrapped the word "paragraph" inside <span> and in css use nested selector p span to change its text color to black and increase its font size. This helped me understand how nested selectors work.

Create another section, add <h2> heading tag followed by an unordered list with two list items. In both items, the word “here” was made into a clickable link using the <a> anchor tag. For styling these links ,in style.css I used psuedo class selector(:first-child and :last-child) I applied li:first-child a to give the first link a yellow background color and li:last-child a to give the second link a blue background color.

After that, I added an ordered list with 5 list items. First, I used the direct child selector ol > li to set the text color of all list items to black. 

Then, using the combination of direct child selector and :nth-child() pseudo-class selector, I changed the color of the second list item to blue using ol > li:nth-child(2) and the third list item to red using ol > li:nth-child(3).

Through this task, I gained a clear understanding of CSS selectors such as element selectors, class selectors, ID selectors, nested selectors, direct child selectors, and pseudo-class selectors. I also learned how CSS helps in improving the appearance and structure of an HTML webpage, making it more attractive and user-friendly.

To run this project, open it in VS Code and install live server extension and on bottom right corner click Go live and then on browser it will open the page and display the full styled HTML page.
