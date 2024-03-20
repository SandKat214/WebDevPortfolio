// Import Dependecies
import React from 'react';

// Import Icons
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";


function ArtItem({ artItem, onEdit, onDelete }) {
    return (
        <tr>
            <td className='center, external'>
                <RiDeleteBin2Line onClick={() => onDelete(artItem._id)} />
            </td>
            <td className='center, external'>
                <FiEdit2 onClick={() => onEdit(artItem)} />
            </td>
            <td>{artItem.title}</td>
            <td>{artItem.artist}</td>
            <td className='center'>{artItem.medium}</td>
            <td className='center'>{artItem.width}"</td>
            <td className='center'>{artItem.height}"</td>
            <td className='center'>{artItem.created}</td>
            <td className='center'>{artItem.acquired.slice(0, 10)}</td>
        </tr>
    );
}

export default ArtItem;