// Import Dependencies
import React from 'react';
import ImageGallery from 'react-image-gallery';


// Define image objects
const images = [
    {
        original: 'images/python-chess-piece-move-function.png',
        thumbnail: 'images/python-chess-piece-move-function.png',
        description: `Python code which shows a method, 'move( )', of the 'Pieces' class, implemented for a Chess game program. When called by a particular type of piece, the parameters of the method include the board position, the piece's team, and information on how to move to the next position if appropriate to the piece type. The method returns a dictionary of possible moves, where the key is a tuple containing the row and column of the board position, and the value is a captured piece of the opposite team or 'None'. Project completed during Winter Break in December 2023.`,
        originalHeight: '450px',
    },
    {
        original: 'images/pygame-chess-gui.png',
        thumbnail: 'images/pygame-chess-gui.png',
        description: `Chess GUI implemented, in part, by the code in the previous image. Board design and GUI made possible by the import of the Python Pygame library. This particular screenshot shows the action of the game when the black player checkmates the White King — a pop-up game message indicates, "BLACK Wins. Play again: y or n?," ending the game and inviting the users to play another.  Project completed during Winter Break in December 2023.`,
        originalHeight: '450px',
    },
    {
        original: 'images/drippy-ice-cream-glaze-mug.jpg',
        thumbnail: 'images/drippy-ice-cream-glaze-mug.jpg',
        description: `I have been making pottery for almost twenty years, and taught an adult wheel throwing class for about seven years before I decided to attend college a second time. My absolute favorite thing to make is mugs. This piece is made out of stoneware clay and was fired to cone 6 (roughly 2230 ℉) in an electric kiln. The glaze that is dripping down from the rim, onto the transparent periwinkle glaze at the bottom, reminds me of melting vanilla ice cream. This piece was completed in 2021.`,
        originalHeight: '450px',
    },
    {
        original: 'images/mexico-city-zocalo-dia-de-los-muertos.jpg',
        thumbnail: 'images/mexico-city-zocalo-dia-de-los-muertos.jpg',
        description: `The Zocalo is the central plaza in Mexico City. During the celebration of the Day of the Dead in November 2022, the Zocalo was decorated with skeleton displays that stood several stories high. The two pictured here were the center-pieces, but there were many more slightly smaller versions lining the entire square. Each one represented a different State of Mexico.`,
        originalHeight: '450px',
    },
    {
        original: 'images/dope-tetrahedron-hummingbird-mug.jpg',
        thumbnail: 'images/dope-tetrahedron-hummingbird-mug.jpg',
        description: `This mug features a few different techniques, including stamping for the letters, screen printing for the star tetrahedron and hummingbird graphics, and slip trailing for the black drips. This mug was fired in a cone 10 (roughly 2350 ℉) reduction gas kiln. Reduction means that the piece was fired in an oxygen reduced/poor environment. At the proper moment, the potter can manipulate the atmosphere of the kiln by turning up the gas and pushing in the damper, so that the flames can consume the extra oxygen. The results of doing this can give you a clay body and glaze which are deeper or richer in tone. This piece is made of stoneware clay and was completed in 2021.`,
        originalHeight: '450px',
    },
    {
        original: 'images/rainy-drops-sodafire-mug.jpg',
        thumbnail: 'images/rainy-drops-sodafire-mug.jpg',
        description: `The only piece of this mug that actually features a glaze is the glossy blue that is flowing over the lip from the inside, and that same glaze is antiqued into the recessed raindrop shapes carved into the side. That toasty golden gloss that permeates the clay body all around, is the result of a chemical reaction. This mug was soda-fired to cone 10. A soda kiln is, most commonly, a gas kiln. At the proper moment during the firing process, a solution of soda ash, dissolved in water, is sprayed inside of ports at the kiln's sides. The heat causes the soda to separate and bond to the silica in the clay, creating this natural glaze on the pot. Completed in 2021.`,
        originalHeight: '450px',
    },
    {
        original: 'images/teotihuacan-with-hot-air-balloons.jpg',
        thumbnail: 'images/teotihuacan-with-hot-air-balloons.jpg',
        description: `In October 2022, my partner and I took a trip to Mexico City and, more than anything, I wanted to visit the  ancient city of Teotihuacan. I really enjoy the mystery of an ancient or abandoned place. They give balloon tours there, so that made for a beautiful backdrop to the scene.`,
        originalHeight: '450px',
    },
    {
        original: 'images/python-sort-timer-functions.png',
        thumbnail: 'images/python-sort-timer-functions.png',
        description: `Python code showing the implementation of a decorator function, 'sort_timer( )', which calculates how many seconds it takes to run the decorated function — in this case, two different sorting algorithms: Bubble Sort and Insertion Sort. Project completed during Intro to Computer Science II at Oregon State University, Fall 2023.`,
        originalHeight: '450px',
    },
    {
        original: 'images/python-compare-sorts-function.png',
        thumbnail: 'images/python-compare-sorts-function.png',
        description: `Python code showing a function, 'compare_sorts( )', which uses pyplot, from the Matplotlib library, to generate a graph showing a comparison of the runtimes of two different functions, specifically Bubble Sort and Insertion Sort. The x-axis will show the size of the list being sorted, and the y-axis displays the time in seconds. Project completed during Intro to Computer Science II at Oregon State University, Fall 2023.`,
        originalHeight: '350px',
    },
    {
        original: 'images/matplotlib-sort-comparison.png',
        thumbnail: 'images/matplotlib-sort-comparison.png',
        description: `Graph generated by a sort timer program using the Matplotlib Python library. This image shows the results of code which calculates the number of seconds needed by two different sorting algorithms, Bubble Sort and Insertion Sort, to sort lists varying in size from 1,000 to 10,000 elements inclusive. Project completed during Intro to Computer Science II at Oregon State University, Fall 2023.`,
        originalHeight: '450px',
    },
    {
        original: 'images/grateful-dead-stealie-mug.jpg',
        thumbnail: 'images/grateful-dead-stealie-mug.jpg',
        description: `I love music and other popular culture tropes, and sometimes I like to incorporate that into my work. The juxtaposition of textures is really nice here, between the very dry matte eggshell glaze underneath the graphic and the glossy, wet periwinkle to green glaze that is dripping down from the lip of the mug. This piece is made of stoneware clay, and was fired to cone 6 in an electric kiln. Completed in 2021.`,
        originalHeight: '450px',
    },
    {
        original: 'images/mexico-city-marketplace-kitty.jpg',
        thumbnail: 'images/mexico-city-marketplace-kitty.jpg',
        description: `A vegetable vendor at an indoor marketplace in Mexico City. We did most of our shopping at small marketplaces like this one. It was very common to see cats there, working hard to keep the booths pest-free, obviously loved and well cared for.`,
        originalHeight: '450px',
    },
]

function GalleryPage() {
    // Display Content
    return (
        <>
            <h2>Gallery</h2>

            <article className="gallery">
                <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;
