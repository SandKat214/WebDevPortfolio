// Import Dependencies
import React from 'react';

function TopicsPage() {
    // Display Content
    return (
        <>
            <h2>Web Development Concepts</h2>

            <nav className="local">
                <a href="#servers">Servers</a>
                <a href="#frontend">Frontend</a>
                <a href="#images">Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javaScript">JavaScript</a>
            </nav>
            
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    {/* Explain what index means as it relates to websites and servers. */}
                    Index refers to the <strong>designated homepage</strong> of a website. Meaning that when a <strong>URL</strong> homepage is requested, the <strong>web server</strong> is designed to automatically map that request's <strong>path to resource</strong> as the index file, found in the root directory. In other words, in most of the web applications that exist, whenever a GET request has been received for the homepage of a URL, that application is set up to return the file 'index.html'. Such is the case for the <strong>Apache</strong> web server used by OSU's engineering software. However, 'index.html' is not universally used for all servers. In some instances, like the <strong>Microsoft</strong> .NET platform, the server may be looking for 'default.html' as the homepage. Other alternates could include 'index.js' or 'index.php'. 
                </p>
                <p>
                    {/* Explain what index means as it relates to websites and servers. */}
                    After adding the assignment to my ENGR web server, lots of new information can be observed 
                    within the <strong>network header request/response Inspector</strong> output screen. The general header shows the request URL, request method, status code, remote address/<strong>IP address</strong>, and referrer policy. Previously, when the file was viewed locally instead of via the web server, the request method, status code and referrer policy were exactly the same. However, there was no remote 
                    address given when the page was inspected locally. The <strong>HTTP request</strong> was not sent to the web server, in this instance, so there was no need for an IP address to be requested/returned from a <strong>DNS</strong> server. To locate the resource, only the local path from the hard drive was needed. In fact, the request URL differs slightly between the two inspections as well — from the web server, 
                    the request URL has the <strong>protocol</strong> 'https', while locally the protocol is 
                    'file', indicating a file path on the hard drive. Since the local inspection did not require the HTTP request, the request headers contained only some specific client information. Conversely, the web server inspection contains information about what <strong>hypermedia</strong> can be accepted, language, cache information, the host, as well as the information about the user/client/browser. Finally, the local response headers only showed the content type and last modified date information. The web server's response headers include those as well as the content length, content encoding, date, and server information.
                </p>
                <p>
                    {/* Explain why the favicon.ico file has a status 200, but the main.css and main.js files status 400. */}
                    The 'favicon.ico' file has a <strong>status code</strong> of 200 because the request was successful. This favorites icon is 
                    provided by the OSU server by default, since the HTTP request is being processed by the College of Engineering web server. Since the icon was requested and subsequently returned to the response body without any issues, the server 
                    returned a status code of 200 to reflect that success. The 'main.css' and 'main.js' files each return a status code of 404, meaning that those resources are not found. It would seem that the server was expecting to receive a CSS and 
                    JavaScript file of those names, respectively. However, there are not yet any files with those names associated with the assignment folder transferred to my ENGR web server, which would explain why the server returned the 404 status code. A status code of 400, meaning bad request, would amount to the same thing in this particular instance. A bad request could indicate that a required parameter is absent from a request.
                </p>
                <p>
                    {/* Explain the parts of the URL to your web file. What is the scheme, the subdomain, the host domain, and the resources? */}
                    The URL to my web file starts with the <strong>scheme</strong>, 'https', which indicates this protocol must be used by the web 
                    client to obtain the resource. Following that, we find the <strong>subdomain</strong>, 'web.engr', which is a subsection of the server name. The host <strong>domain</strong>, 'oregonstate.edu', follows the subdomain and is the next section of the server name. This domain name will map to a specific IP address so that a <strong>TCP/IP</strong> connection can be made between the web client and server machine. The path to resource, '/~sandeenk/a1-sandeenk', comes after the host name and completes my URL. This identifies the requested resource on the server and what should be returned to the web client via the <strong>HTTP response</strong>. 
                    Since my URL path is a directory, the web server is configured to automatically map to the file 'index.html' located within that directory.
                </p>
                <nav className="local"><a href="#top">Top</a></nav>
            </article>

            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    {/* The concept of frontend design. */}
                    <strong>Frontend design</strong> involves the aspects of the website or application that deal directly with the experience of the user. The visual aspects of the design, such as color, arrangement, and font, are included in the frontend. The interface on which the user interacts, such as navigation, and how the application responds to that interaction, visually, is also part of the frontend design. In frontend design, it is important to consider the <strong>usability</strong> of the service so that the user will have a satisfying experience and will subsequently continue to use it. Usability engineering approaches this efficiently by taking into account the <strong>Five "E"s</strong> of usability.  
                </p>
                <dl>
                    {/* The five "E"s of usability, separate the topics and descriptions. */}
                    <dt><strong>Effective</strong></dt>
                    <dd>
                        The service successfully and accurately allows the user to meet their objective.
                    </dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>
                        The service allows the user to complete their task in the fewest possible steps, allowing them to accomplish their goal expeditiously.
                    </dd>
                    <dt><strong>Easy to Navigate</strong></dt>
                    <dd>
                        The functions of the service are intuitive and understandable, even for a new user. They will be able to navigate and use it with little to no instruction.
                    </dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>
                        The service does not run into any snags or problems during its operation and navigation by the user.
                    </dd>
                    <dt><strong>Enjoyable/Engaging</strong></dt>
                    <dd>
                        The service correctly fulfills the requirements, desired by the user, in terms of what is contained therein and how it is laid out. The user will likely continue to use the service in the future.
                    </dd>
                </dl>
                <p>
                    {/* The purpose of each of the page layout tags. */}
                    Page layout tags are <strong>block-level</strong> elements, meaning they separate or break-up the information. This is done visually in the browser using a <strong>newline</strong> before and after that element. Machines, including search engine robots and screen readers, use page layout tags to locate where these items reside on the page. The <strong><code>&lt;header&gt;</code></strong> tag contains the masthead for the website or application and is the same on different pages of the same site. The <strong><code>&lt;nav&gt;</code></strong> tag controls navigation, allowing the user to easily move from page to page on the same site. The <strong><code>&lt;main&gt;</code></strong> tag holds the key content of the page and all subsequent elements listed here, except the footer, are nested within it. The <strong><code>&lt;section&gt;</code></strong> tag groups related content thematically. Each section will typically have a headline as its first child element. The <strong><code>&lt;article&gt;</code></strong> tag displays the information about a single topic. It will also have its own headline and is usually found within a section element. Finally, the <strong><code>&lt;footer&gt;</code></strong> tag is added under the main element and holds any copyright information from the owner. It can also contain contact or legal information.
                </p>
                <h4>How Anchors Link to Content</h4>
                <ol>
                    {/* How anchors link to external content, internal content, and from page-to-page. */}
                    <li>
                        An external anchor requires an <strong>absolute path</strong> for the <code>href</code> attribute of its anchor tag, namely, the complete URL which will navigate the user to a resource external from the current website or application.
                    </li>
                    <li>
                        An internal anchor will navigate the user to a specified topic within the same page, and requires the use of the <code>id</code> attribute defined within the element containing said content. The anchor reference should be the <strong>ID</strong>, with a hashtag (#) in front, to make reference to the desired element.
                    </li>
                    <li>
                        A page-to-page navigation anchor requires a <strong>relative path</strong> for its reference. That path will indicate another file relative to the file location of the page where the user currently resides.
                    </li>
                </ol>
                <nav className="local"><a href="#top">Top</a></nav>
            </article>

            <article id="images">
                <h3>Optimizing Images</h3>
                <p>
                    {/* What are the 6 major specifications of images for the web?  And why? */}
                    Optimizing images for the web is essential for making certain that the browser can present it correctly, and in a timely fashion. Optimization can be accomplished by adhering to the major specifications. A <strong>descriptive file name</strong> accurately and succinctly describes the image. A proper file name aids <strong>search engine optimization (SEO)</strong>, assisting in bot classification. An image should be scaled down as much as possible so that it maintains a <strong>small file size</strong>. <strong>Compression</strong> is an important tool in this reduction process. <strong>Lossy</strong> compression can result in the fragmenting of some image data, but makes for a smaller file. <strong>Lossless</strong> compression preserves the image integrity, but does not reduce the file size as much as lossy. Images should also be cropped so that they orient correctly to the <strong>exact dimensions</strong> of the web page block on which they reside. Photos are typically in the <strong>correct file format</strong> if they are .JPG, while line-art should be formatted as either .GIF or .PNG. <strong>Reduced resolution</strong> also aids in image optimization when it comes to pixels per inch (ppi). The resolution that monitors can display is quite varied, and it is not atypical to equip a page with multiple sizes for an image. Finally, one may opt for a particular <strong>color mode</strong> depending on the file format of the images. For instance, RBG services .PNG, .JPG, .SVG, and .WebP, while indexed is utilized for .GIF and occasionally .PNG.
                </p>
                <p>
                    {/* Which file formats are most appropriate for photos and for line art? And why? */}
                    The most applicable file formats for photography are .JPG and .WebP. <strong>JPG</strong> is a format reserved exclusively for photographic images. Due to the highly detailed nature of photos, it is necessary to reduce the strain that they will enact on the server by resizing and compressing them. Compression reduces the file size immensely while retaining its rectangular shape. <strong>WebP</strong> is also exclusive to photography and can utilize the benefits of compression in the same way as JPG. Transparency is possible with .WebP due to an alpha channel. Line art is best served via the file formats .GIF, .PNG, and .SVG. <strong>GIF</strong> works well because the edges anti-alias, making for a smoother line transition. 8-bit transparency and animation is a possibility with this format, so small video progressions are all the rage. <strong>PNG</strong> files can go on top of a full spectrum of colors without any kind of disfigurement and due to an alpha channel, true transparency is possible. <strong>Scalable Vector Graphics</strong> or <strong>SVG</strong> works wells with 2-D, interactive, or animated images because they are mathematically derived and the text is extremely sharp via this format.
                </p>
                <nav className="local"><a href="#top">Top</a></nav>
            </article>

            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    {/* How do browsers and devices use favicons? */}
                    Favicons are a way to establish an identity or brand on a website or app so that it is immediately recognizable to the user. They are usually a simple logo or symbol that is sized and formatted appropriately. In order for the browser to properly display the icon, it is altered and saved in different file formats so that it works aptly on the myriad of different devices with which it might come into contact. File formats can include .ICO, .SVG. .GIF and .PNG. Upon receiving a request, the browser will anchor the saved favicon to the appropriate client, such as a bookmark, device screen, or search engine, etc&#8230;
                </p>
                <nav className="local"><a href="#top">Top</a></nav>
            </article>

            <article id="css">
                <h3>Cascading Stylesheets</h3>
                <p>
                    {/* What are the main reasons to incorporate stylesheets in websites and apps? */}
                    The use of <strong>cascading stylesheets</strong>, or <strong>CSS</strong>, is an essential element towards defining the style of a website. While HTML takes care of the structure and content, CSS dictates how that content will be displayed to the user. Websites can be made to look and feel more engaging, which improves accessibility and usability. Legibility as well as readability can be enhanced through the application of styling, and the requirements of a brand, if applicable, can be better endorsed. Placement, size, spacing, color, font, as well as hundreds of other elements can be manipulated so that there are endless design combinations. CSS also allows for special cases in terms of screen size, so that different styles can be defined for different devices.
                </p>
                <p>
                    {/* What are the 5 ways to incorporate styles? And why? */}
                    There are five main ways that styles can be incorporated into a website's design. The most common method is to link an <strong>external</strong> stylesheet into the HTML file. A stylesheet file, with a .css extension, is incorporated into the HTML <code>&lt;head&gt;</code> area via a <code>&lt;link&gt;</code> tag. This global stylesheet will service any HTML file to which it is connected, making it an efficient way to maintain styling for different pages of the same website. Stylesheets can also be <strong>imported</strong> into an HTML file, or it's linked stylesheet, using the syntax &mdash; <code>@import "filename.css"</code>. The third method for incorporating style into HTML is by <strong>embedding</strong> it via the <code>&lt;style&gt;</code> tag; CSS syntax is used within the opening and closing tags to define the styles desired for a particular element. <strong>Inline</strong> style can be defined within an HTML element tag, just like any other attribute. Finally, style can be defined in HTML via <strong>JavaScript</strong> code by working with the document object model.
                </p>
                <nav className="local"><a href="#top">Top</a></nav>
            </article>

            <article id="forms">
                <h3>Forms</h3>
                <p>
                    {/* What are the 6 major goals of accessible forms? And why? */}
                    Accessibility means that the features of an application or website are also available to those with disabilities. It is advisable to consider the six major goals of achieving accessible forms when utilizing them in web development. Since placeholders are only advantageous to those of us who are able to see the words, <strong>providing clear instructions </strong> before the form and via the input labels is the first consideration of accessibility. A follow-up to the previous goal is to <strong>let users know why</strong> the data is being collected and <strong>which fields are required</strong>. <strong>Setting the first field to autofocus</strong> allows the user to navigate the form fields using only the keyboard. Some cannot use a mouse or trackpad, so by <strong>ensuring that each form control can be filled in using the keyboard</strong>, we are considering the needs of those individuals. If a form is complex, <strong>adding tab indexing</strong> can eliminate confusion by ensuring that fields are filled out in the correct order. Finally, <strong>ensure validation messages are screen readable</strong> because the built-in HTML browser messages are not screen-readable.
                </p>
                <p>
                    {/* What are the major tags, their attributes, and their purposes? */}
                    There are several HTML tags that are required and/or available for use in forms. Firstly, the <strong><code>&lt;form&gt;</code></strong> tag is essential for adding a form to an application or website. Its common attributes include <strong><code>action</code></strong>, to indicate where to send the request from the form. The HTTP method that will be used once the form has been submitted is indicated by the <strong><code>method</code></strong> attribute. The <strong><code>&lt;fieldset&gt;</code></strong> and <strong><code>&lt;legend&gt;</code></strong> tags work together to group coordinate information within a form. Forms almost always contain elements that are initialized via the <strong><code>&lt;input&gt;</code></strong> tag, which is often paired with a <strong><code>&lt;label&gt;</code></strong> tag to identify the input purpose and to aid user accessibility via screen-readers. The label's <strong><code>for</code></strong> attribute with match of with the <strong><code>id</code></strong> attribute of the input to link them together. The <strong><code>type</code></strong> attribute indicates the type of input that will be entered via that element, such as text or email. Type can also specify whether the input is received via a checkbox (multiple value choices) or a radio button (single choice). The input's attribute, <strong><code>name</code></strong>, is very important as it becomes the key that the server will match up with the data value given by the user. Other input attributes, such as <strong><code>required</code></strong> and <strong><code>pattern</code></strong> can compel information validation from the user. Other than input, the <strong><code>&lt;select&gt;</code></strong> and <strong><code>&lt;textarea&gt;</code></strong> tags can draw form information from the user. Select, in concert with the <strong><code>&lt;option&gt;</code></strong> tag, presents different choices for the user via a drop-down menu. The <strong><code>value</code></strong> attribute of the option tag will be the value provided to the server to match the key indicated by the name attribute of the select tag. Textarea provides a larger text box in which the user can enter multiple lines of text. The <strong><code>minlength</code></strong> and <strong><code>maxlength</code></strong> attributes dictate how many characters that entry within the text box allows. Finally, it is likely that one would utilize the <strong><code>&lt;button&gt;</code></strong> tag to create a button for the form submission. This button will initiate the HTTP request via the action and method that were specified via those attributes of the form tag. 
                </p>
                <p>
                    {/* What are the major form style recommendations to improve usability? And Why? */}
                    Forms can be styled to improve their usability design. The fieldset can be styled such that the border matches the color scheme of the rest of the application/website. Margins can be added to give them a more readable spacing, as well as padding to keep the labels and inputs away from the edges. The legend can be colored to match the border or styled so that it reads differently from the labels. The inputs for texts should have a larger font to increase legibility, as well as sufficient padding to accommodate the size of fingertips on mobile devices. Consistency of design is aided by form and inputs inheriting the font-family of the body. Autofocus benefits accessibility and usability by indicating the start of form input without a mouse click or finger touch. The <code>:focus</code> selector can be styled, so the user can quickly identify which form field is currently active. Likewise, the <code>:required</code> selector can be used to indicate to the user, which fields are required, eliminating confusion about why there may be trouble with the form submission. The <code>:invalid</code> and <code>:valid</code> selectors can signal to the user if they have correctly filled in information for submission. Checkboxes and radio buttons can also be styled to look different, when checked. As always, margin, padding, color, and font are major considerations of the styling and design of all elements.
                </p>
                <nav className="local"><a href="#top">Top</a></nav>
            </article>

            <article id="express">
                <h3>Express</h3>
                <p>
                    {/* What are these technologies, and how can we use them to improve the web development experience? */}
                    Node, npm, and Express are linked technologies that cooperate to aid in the development of web applications. Node, specifically, is an open-source runtime environment that executes JavaScript code to develop server-side and networking applications. Developing these web applications is much easier through Node.js, due to its extensive library of JavaScript modules. Npm is automatically downloaded with Node and acts as its package manager. Using npm from the <strong>command-line utility</strong>, one can download Node packages from its <strong>online repository</strong> using the commands, <strong><code>init</code></strong>, <strong><code>install</code></strong>, and <strong><code>start</code></strong>. Express is a commonly used framework for using Node.js to build web applications. Express allows us to add features to the HTTP request and response from the Node server. One can use Express to dictate the ports, as well as the method for data routing.
                </p>
                <nav className="local"><a href="#top">Top</a></nav>
            </article>
            <article id="javaScript">
                <h3>JavaScript</h3>
                <p>
                    {/* What are the main data types? */}
                    The main data types in JavaScript are number, boolean, string, symbol, special values, and object. A JavaScript number is used for all numbers and is double-precision floating-point. JavaScript automatically converts strings to numbers, but it is important to know your types and avoid this automatic type conversion. A boolean is used in a conditional and can represent one of two values, true or false. A string consists only of characters and can be enclosed in either single or double quotes. A type of alternate string, called a template literal, is enclosed by backticks and can contain an embedded expression or variable. This expression is converted to a string and is displayed inline with the rest of the enclosed value. The special values 'null' and 'undefined' mean that the variable contains no value. Finally, an object consists of property-value pairs separated by a colon.
                </p>
                <p>
                    {/* How are objects, arrays, and JSON used? */}
                    Variables assigned to a JavaScript object cannot be reassigned. However, the properties of an object are mutable, and we can create, read, update, and delete (CRUD) as needed. Dot notation is to used to create and update object properties. Whereas bracket indexing, in addition to dot notation, can be used to read the value of a property. Deletion is simply done by using the 'delete' operator in front of the dot notated property that should be removed. A JavaScript array is a variation on an object where the property names are the string versions of integers, incrementing up from the starting value of 0. Elements of an array can be accessed via bracket indexing of the integer value or the string property name. JavaScript Object Notation (JSON) offers a format for an exchange of information between different applications and/or programming languages. The two most commonly used methods for doing this are 'stringify', which formats a program object to a string, and 'parse', which creates a program object from a JSON string.
                </p>
                <p>
                    {/* How are conditionals and loops used? */}
                    Conditionals statements are expressions that evaluate to a boolean value, namely true or false. A program design may include a conditional in such a situation where a branch is needed. The program will then execute different code depending on the value to which the branch evaluates. The general syntax of a conditional uses the keywords 'if', 'else if', and 'else', followed by an expression to create the desired branches of code. The code wrapped in curly braces following the expression will execute only if the expression evaluates to true. Similarly to conditionals, loops repeat code as long as a particular expression evaluates to true. When the expression evaluates to false, the loop will break. 'While' loops build on the use of conditional statements in that a 'while' loop will repeat only while the conditional statement is true. 'For' loops, on the other hand, are better utilized when we know that a loop should repeat a certain number of times. For instance, a 'for' loop and its variations may be used to iterate over the properties of an object or to repeat until a decrementing counter gets to zero.
                </p>
                <p>
                    {/* What is object-oriented programming? */}
                    Object-oriented programming involves using a programming language to create an object, or an abstract representation of one. An object has its own identity that is unique from other objects. Also, a state, which includes certain properties that are tied to that object &#8212; these could include a name, or information regarding its size, etc&#8230; Finally, an object has behavior, through functions which are defined so that the object can perform certain actions in relation to itself. In JavaScript, functions can be linked to the object in three different ways. First, they can be linked as properties, in the case where the object is set up as an object data type. They can also be linked by defining them in an object prototype, to be linked to an instance of the object during creation. Last, they can be linked as methods, if the object is set up as an instance of a user-defined class.
                </p>
                <p>
                    {/* What is functional programming? */}
                    In JavaScript, functions are first-class values, meaning that the function can be assigned to a variable, passed into another function as an argument, or returned as a value from another function &#8212; just like any other object in JavaScript. The root of this functionality is that a function can be stored inside a variable. When we pass a function, as an argument, to another function, the passed function is then assigned to the parameter variable. When we want to utilize that function, we can call it like we normally would, using the variable name followed by a pair of parentheses. This is a useful feature when creating map functions, which return the result of value(s) that are passed through the operations of another, internal, function. Functional programming also features the use of exceptions. Exceptions can be utilized to catch and handle an error by intentional design, as opposed to the default behavior of JavaScript after an error, which is to return the special value 'undefined'.
                </p>
                <nav className="local"><a href="#top">Top</a></nav>
            </article>
        </>
    );
}

export default TopicsPage;