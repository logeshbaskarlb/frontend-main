import React, { Fragment, useEffect, useState } from 'react';
import Product from '../product/Product';
import axios from 'axios'; // Assuming you're using axios for HTTP requests

const WishList = () => {
    const [wishListProducts, setWishListProducts] = useState([]);

    useEffect(() => {
        // Fetch Wish List Products from API
        const fetchWishListProducts = async () => {
            try {
                // Make an API call to fetch Wish List products
                const response = await axios.get('/api/wishlist');  
                console.log(response);
                setWishListProducts(response.data);
            } catch (error) {
                console.error('Error fetching Wish List products:', error);
            }
        };

        // Call the function to fetch Wish List Products
        fetchWishListProducts();
    }, []);

    return (
        <Fragment>
            <h1 className='text-center'>WishList</h1>
            <hr />
            <div className="row">
                {wishListProducts.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        </Fragment>
    )
}

export default WishList;
