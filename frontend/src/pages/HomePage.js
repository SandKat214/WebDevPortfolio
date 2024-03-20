// Import Dependencies
import React from "react";

function HomePage() {
    return (
        <>
            <h2>Web Development Portfolio</h2>
            <article>
                {/* Explain career goals */}
                <p>
                    Building a project that employs thoughtful planning has always been something that I have enjoyed. It feels like assembling a puzzle or solving a riddle, in that it is immensely satisfying to see the sum of separate parts come together into a useful whole. My background is in three-dimensional art; there is a physicality to take into consideration, otherwise the piece may not hold itself up. Web development feels really similar to this because one needs to have a broad knowledge of different technologies, and how they interact with each other, in order to build a cohesive site or app that works seamlessly.  
                </p>
                <p>
                    Trying out a new career path is a change that I feel I need in my life to avoid stagnancy. I have always had a talent for mathematics and, when I was in high school, took computer programming classes — which I very much enjoyed. 
                </p>
                <p>
                    My current enrollment in Oregon State University's School of Engineering and Computer Science is part of a short-term goal towards earning a Bachelor of Science in Computer Science. Computer Programming is something I am passionate about, and I have excelled in the coursework that showcases its versatility. My hope is that this short-term goal will transition into my long-term goal of a new career in software development. Learning more about AI and other new technologies, at OSU and beyond, that are on the horizon is something of which I am excited to be a part.
                </p>
                {/* List Introduction */}
                <p>
                    Welcome to the frontend of my portfolio website, which was build using a React framework. Below is a list of the major technologies used in its construction. For information regarding some of the other technologies involved, as well as web development topics in general, please click the <strong>“Topics”</strong> link.
                </p>
                {/* List Explains the major technologies used in the website */}
                <dl>
                    <dt><strong>MongoDB</strong></dt>
                    <dd>
                        MongoDB is the database management system employed by the <strong>“Art”</strong> page of this website. As part of the model layer of the website backend, it stores the collection of documents, created via the user interface, in JavaScript Object Notation (JSON). It responds to the creation, retrieval, updating, and deletion (CRUD) operations enacted via the user in the view layer.
                    </dd>
                    <dt><strong>Express</strong></dt>
                    <dd>
                        Express is a backend framework that works in tandem with Node. It is responsible for the controller layer's asynchronous handling of requests and responses from the user at the view layer, how they transfer to the model layer and MongoDB, and back to the view layer again.
                    </dd>
                    <dt><strong>React</strong></dt>
                    <dd>
                        React is the framework for the frontend application, the user interface. It is written in JavaScript with its own additional syntax, and is responsible for the rendering and re-rendering of the components used in the pages of the site. These processes are carried out  completely on the client-side, so no requests are sent to the web server, resulting in a single-page application.
                    </dd>
                    <dt><strong>Node.js</strong></dt>
                    <dd>
                        Node.js is the engine that runs the JavaScript code needed on the frontend and backend of the website.
                    </dd>
                    <dt><strong>REST API</strong></dt>
                    <dd>
                        A REST application programming interface uses a set of rules and constraints which allows for a functional single-page application that can be created using a React framework. In an SPA, the browser loads the HTML, CSS, and JavaScript for the page exactly once. The page then communicates with the server for various CRUD operations only. The server must remain stateless, in that the client must send all the information needed to process a request within the request itself. These guidelines as said to be RESTful.
                    </dd>
                </dl>
            </article>
        </>
    );
}

export default HomePage;
