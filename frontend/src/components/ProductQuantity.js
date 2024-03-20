// Import Dependencies
import React, { useState } from "react";
import { PiPlusThin, PiMinusThin } from "react-icons/pi";

function ProductQuantity({ price, setTotal }) {
    // Variables
    const [quantity, setQuantity] = useState(0);
    let upCount = 0;
    let downCount = 0

    // Quantity functions
    const increase = () => {
        upCount = quantity + 1;
        if (upCount > 10) {
            setQuantity(10);
            downCount = 10;
        } else {
            setQuantity(upCount);
        }
        setTotal(upCount * price);
    }
    
    const decrease = () => {
        downCount = quantity - 1;
        if (downCount < 0) {
            setQuantity(0);
            downCount = 0;
        } else {
            setQuantity(downCount);
        }
        setTotal(downCount * price);
    }

    // Display icons and quantity
    return (
        <div>
            <PiMinusThin className="icon-smaller" onClick={decrease} />
            <span className="side-padding">{quantity}</span>
            <PiPlusThin className="icon-smaller" onClick={increase} />
        </div>
    );
}

export default ProductQuantity;
