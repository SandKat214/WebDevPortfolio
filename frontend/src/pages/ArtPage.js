// Import Dependencies
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtList from '../components/ArtList';


function ArtPage({ setArtItem }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [artItems, setArtItems] = useState([]);

    // RETRIEVE the entire list of art items
    const loadArtItems = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artItems`);
        const artItems = await response.json();
        setArtItems(artItems);
    } 
    

    // UPDATE a single art item
    const onEditArtItem = async artItem => {
        setArtItem(artItem);
        redirect("/update");
    }


    // DELETE a single art item  
    const onDeleteArtItem = async _id => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artItems/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/artItems`);
            const artItems = await getResponse.json();
            setArtItems(artItems);
        } else {
            console.error(`Unable to delete piece from the collection. ID = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the art items
    useEffect(() => {
        loadArtItems();
    }, []);

    // DISPLAY the art items
    return (
        <>
            <h2>Art Collection</h2>
            <p className='intro'>All the current pieces in the art collection.</p>
            <ArtList 
                artItems={artItems} 
                onEdit={onEditArtItem} 
                onDelete={onDeleteArtItem} 
            />
        </>
    );
}

export default ArtPage;