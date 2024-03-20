// Import Depedencies
import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditArtPageForm = ({ artItemToEdit }) => {

    // Get current year
    const currentDate = new Date();
    const maxDate = currentDate.toLocaleDateString("en-CA");
    const currentYear = currentDate.getFullYear();
    
    const [title, setTitle]       = useState(artItemToEdit.title);
    const [artist, setArtist]     = useState(artItemToEdit.artist);
    const [medium, setMedium]     = useState(artItemToEdit.medium);
    const [width, setWidth]       = useState(artItemToEdit.width);
    const [height, setHeight]     = useState(artItemToEdit.height);
    const [created, setCreated]   = useState(artItemToEdit.created);
    const [acquired, setAcquired] = useState(() => {
        if (artItemToEdit.acquired !== undefined) {
            return artItemToEdit.acquired.slice(0, 10);
        };
    });

    const redirect = useNavigate();

    const editArtItem = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artItems/${artItemToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                artist: artist,
                medium: medium,
                width: parseFloat(width).toFixed(2), 
                height: parseFloat(height).toFixed(2),
                created: created,
                acquired: acquired
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Art piece successfully updated`);
        } else {
            const errMessage = await response.json();
            alert(`Unable to update art piece, status code = ${response.status}. ${errMessage.Error}`);
        }
        redirect("/art");
    }

    return (
        <>
        <article>
            <h2>Edit an art piece</h2>
            <p>Use this form to edit a piece of art that already exists in the collection.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which art piece are you editing?</legend>
                    <label htmlFor="title" className='required'>
                        Art title
                    </label>
                    <input
                        type="text"
                        placeholder="Title of the piece"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" 
                        required />
                    
                    <label htmlFor="artist" className='required'>
                        Artist
                    </label>
                    <input
                        type="text"
                        placeholder="Artist of the piece"
                        value={artist}
                        onChange={e => setArtist(e.target.value)} 
                        id="artist" 
                        required />

                    <label htmlFor="medium" className='required'>
                        Medium
                    </label>
                    <select id="medium"
                            value={medium}
                            onChange={e => setMedium(e.target.value)}
                            required >
                        <option value="Paint">Paint</option>
                        <option value="Ceramic">Ceramic</option>
                        <option value="Wood">Wood</option>
                        <option value="Jewelry">Jewelry</option>
                        <option value="Leather">Leather</option>
                        <option value="Fabric">Fabric</option>
                        <option value="Mixed Media">Mixed Media</option>
                    </select>

                    <label htmlFor="width">Width in Inches</label>
                    <input
                        type="number"
                        min='0'
                        step='any'
                        value={width}
                        placeholder="Inches Width"
                        onChange={e => setWidth(e.target.value)} 
                        id="width" />

                    <label htmlFor="height">Height in Inches</label>
                    <input
                        type="number"
                        min='0'
                        step='any'
                        value={height}
                        placeholder="Inches Height"
                        onChange={e => setHeight(e.target.value)} 
                        id="height" />
                    
                    <label htmlFor="created">Creation Year</label>
                    <input
                        type="number"
                        min="1"
                        max={currentYear}
                        value={created}
                        onChange={e => setCreated(e.target.value)} 
                        id="created" />

                    <label htmlFor="acquired" className='required'>Date of Acquisition</label>
                    <input
                        type="date"
                        min={created + "-01-01"}
                        max={maxDate}
                        value={acquired}
                        onChange={e => setAcquired(e.target.value)} 
                        id="aquired"
                        required />

                    <label htmlFor="submit">
                    <button
                        onClick={editArtItem}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditArtPageForm;