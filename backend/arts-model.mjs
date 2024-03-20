// Models for the Art Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Connection to MongoDB server was unsuccessful.' });
    } else  {
        console.log('Success: Connected to MongoDB server.');
    }
});

// SCHEMA: Define the collection's schema.
const artSchema = mongoose.Schema({
	title:    { type: String, required: true },
	artist:     { type: String, required: true },
	medium: { type: String, required: true },
    width: { 
        type: Number, 
        required: true,
        min: [0, 'Value must be positive.']
    },
    height: { 
        type: Number, 
        required: true,
        min: [0, 'Value must be positive.']
    },
    created: { 
        type: Number, 
        required: true,
        min: [1, 'Value must be positive']
    },
    acquired: { type: Date, required: true, default: Date.now}
});

// Compile the model from the schema 
// by defining the collection name "art_items".
const artItems = mongoose.model('Art_Items', artSchema);


// CREATE model *****************************************
const createArtItem = async (title, artist, medium, width, height, created, acquired) => {
    const artItem = new artItems({ 
        title: title,
        artist: artist,
        medium: medium,
        width: width,
        height: height,
        created: created,
        acquired: acquired
    });
    return artItem.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveArtItems = async () => {
    const query = artItems.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveArtByID = async (_id) => {
    const query = artItems.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteArtById = async (_id) => {
    const result = await artItems.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateArtItem = async (_id, title, artist, medium, width, height, created, acquired) => {
    const result = await artItems.replaceOne({_id: _id }, {
        title: title,
        artist: artist,
        medium: medium,
        width: width,
        height: height,
        created: created,
        acquired: acquired
    });
    return { 
        _id: _id, 
        title: title,
        artist: artist,
        medium: medium,
        width: width,
        height: height,
        created: created,
        acquired, acquired
    }
}

// EXPORT the variables for use in the controller file.
export { createArtItem, retrieveArtItems, retrieveArtByID, updateArtItem, deleteArtById }