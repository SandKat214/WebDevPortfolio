// Import Dependencies
import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';

function ProductRow({product}) {
    // State Variable
    const [total, setTotal] = useState(0);
    
    // Convert price to currency
    const dollarPrice = product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
    const dollarTotal = total.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td className='numbers'>{dollarPrice}</td>
            <td className='center'><ProductQuantity price={product.price} setTotal={setTotal} /></td>
            <td className='numbers'>{dollarTotal}</td>
        </tr>
    );
}

export default ProductRow;
