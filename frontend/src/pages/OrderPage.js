// Import dependencies
import React from "react";
import ProductRow from "../components/ProductRow";
import products from "../data/products";

function OrderPage() {
    return (
        <>
            <h2>Place an Order...</h2>

            <article>
                <p className="intro">
                    {/* Tells users what they can do on this page, aka ordering from list of products. */}
                    See below for currently available items.<br/>
                    Select your desired item and enter how many you would like (up to 10 each)...
                </p>
                <table>
                    <caption>Available Inventory</caption>
                    
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th className="numbers">Price</th>
                            <th className="center">Quantity</th>
                            <th class="numbers">Line Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => 
                            <ProductRow 
                                product={product}
                                key={i}
                            />
                        )}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default OrderPage;
              