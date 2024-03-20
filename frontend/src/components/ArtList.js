// Import Dependencies
import React from 'react';
import ArtItem from './ArtItem';
import { Link } from 'react-router-dom';

// Import Icon
import { CgAddR } from "react-icons/cg";


function ArtList({ artItems, onDelete, onEdit }) {
    return (
        // Display List
        <table id="artItems">
            <caption>Add and Edit Art Pieces:</caption>
            <thead>
                <tr>
                    <th colSpan={2}>
                        <Link to="/create" className='external'>
                            <CgAddR className='icon-larger'/>
                        </Link>
                    </th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th className='center'>Medium</th>
                    <th className='center'>Width</th>
                    <th className='center'>Height</th>
                    <th className='center'>Created</th>
                    <th className='center'>Acquisition</th>
                </tr>
            </thead>
            <tbody>
                {artItems.map((artItem, i) => 
                    <ArtItem 
                        artItem={artItem} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ArtList;
