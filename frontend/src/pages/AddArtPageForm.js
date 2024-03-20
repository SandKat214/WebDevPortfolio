// Import Dependencies
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddArtPageForm = () => {

     // Get current year
    const currentDate = new Date();
    const maxDate = currentDate.toLocaleDateString("en-CA");
    const currentYear = currentDate.getFullYear();
    
    // State variables
    const [title, setTitle]       = useState('');
    const [artist, setArtist]     = useState('');
    const [medium, setMedium]     = useState('Paint');
    const [width, setWidth]       = useState(0);
    const [height, setHeight]     = useState(0);
    const [created, setCreated]   = useState(currentYear);
    const [acquired, setAcquired] = useState('');

    const redirect = useNavigate(); 

    const addArtItem = async () => {
        const newArtItem = { 
            title: title, 
            artist: artist, 
            medium: medium, 
            width: parseFloat(width).toFixed(2), 
            height: parseFloat(height).toFixed(2), 
            created: created, 
            acquired: acquired 
        };
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artItems`, {
            method: 'post',
            body: JSON.stringify(newArtItem),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Art piece has been added to the collection`);
            redirect("/art");
        } else {
            alert(`Unable to add new piece to the collection. Status Code = ${response.status}`);
            redirect("/art");
        }
    };


    return (
        <>
        <article>
            <h2>Add an art piece</h2>
            <p>Use this form to add a new piece of art to the collection.</p>
            <p className="required"> Required Fields</p>
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <fieldset>
                    <legend>Which art piece are you adding?</legend>
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

                    <label htmlFor="width" className='required'>
                        Width in Inches
                    </label>
                    <input
                        type="number"
                        min='0'
                        step='any'
                        value={width}
                        placeholder="0.00"
                        onChange={e => setWidth(e.target.value)} 
                        id="width"
                        required />

                    <label htmlFor="height" className='required'>
                        Height in Inches
                    </label>
                    <input
                        type="number"
                        min='0'
                        step='any'
                        value={height}
                        placeholder="0.00"
                        onChange={e => setHeight(e.target.value)} 
                        id="height"
                        required />
                    
                    <label htmlFor="created" className='required'>
                        Creation Year
                    </label>
                    <input
                        type="number"
                        min="1"
                        max={currentYear}
                        value={created}
                        placeholder='2024'
                        onChange={e => setCreated(e.target.value)} 
                        id="created"
                        required />

                    <label htmlFor="acquired" className='required'>
                        Date of Acquisition
                    </label>
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
                            type="submit"
                            onClick={addArtItem}
                            id="submit"
                        >Add</button>
                    </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddArtPageForm;