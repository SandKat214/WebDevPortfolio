// Controllers for the Art Collection

// Import Dependencies
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import * as artItems from './arts-model.mjs';

const PORT = process.env.PORT;
const app = express();

// Middleware
const corsOptions = {
    origin: "https://sandeenk-webdev-portfolio.onrender.com"
}
app.use(express.json());  // REST needs JSON MIME type.
app.use(cors(corsOptions));


// CREATE controller ******************************************
app.post ('/artItems', (req,res) => { 
    artItems.createArtItem(
        req.body.title, 
        req.body.artist, 
        req.body.medium,
        req.body.width,
        req.body.height,
        req.body.created,
        req.body.acquired
        )
        .then(artItem => {
            console.log(`"${artItem.title}" was added to the collection.`);
            res.status(201).json(artItem);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Creation request is invalid. Unable to process request.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/artItems', (req, res) => {
    artItems.retrieveArtItems()
        .then(artItems => { 
            if (artItems !== null) {
                console.log(`All art items were retrieved from the collection.`);
                res.json(artItems);
            } else {
                res.status(404).json({ Error: 'Collection not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Retrieval request is invalid. Unable to process request.' });
        });
});


// RETRIEVE by ID controller
app.get('/artItems/:_id', (req, res) => {
    artItems.retrieveArtByID(req.params._id)
    .then(artItem => { 
        if (artItem !== null) {
            console.log(`"${artItem.title}" was retrieved, based on its ID.`);
            res.json(artItem);
        } else {
            res.status(404).json({ Error: 'That ID was not found in the art collection.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Retrieval request is invalid. Unable to process request.' });
    });

});


// UPDATE controller ************************************
app.put('/artItems/:_id', (req, res) => {
    artItems.updateArtItem(
        req.params._id, 
        req.body.title, 
        req.body.artist, 
        req.body.medium,
        req.body.width,
        req.body.height,
        req.body.created,
        req.body.acquired
    )
    .then(artItem => {
        console.log(`"${artItem.title}" was updated.`);
        res.json(artItem);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Update request is invalid. Unable to process request.' });
    });
});


// DELETE Controller ******************************
app.delete('/artItems/:_id', (req, res) => {
    artItems.deleteArtById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} art item was deleted.`);
                res.status(200).send({ Success: 'Art item was deleted from the collection based on its ID.' });
            } else {
                res.status(404).json({ Error: 'That ID was not found in the art collection.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Deletion request is invalid. Unable to process request.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});