import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

export default function Product ({product, col}) {
    const [isLiked, setIsLiked] = useState(false);
    // console.log(product);

    useEffect(() => {
        const likedState = JSON.parse(localStorage.getItem(`liked_${product._id}`));
        if (likedState !== null) {
            setIsLiked(likedState);
        }
    }, [product._id]);

    const toggleLike = () => {
        const newLikeState = !isLiked;
        setIsLiked(newLikeState);
        localStorage.setItem(`liked_${product._id}`, JSON.stringify(newLikeState));
    };

    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
            <div className="card p-3 rounded position-relative">
            <div className="heart-icon" style={{cursor:"pointer"}} onClick={toggleLike}>
                    <FontAwesomeIcon icon={isLiked ? fasHeart : farHeart} style={{fontSize:'30px', position:"absolute", right:'.2em', color:'red'}} />
                </div>
                {product.images.length > 0 &&
                <img
                className="card-img-top mx-auto"
                src={product.images[0].image}
                alt={product.name}
                style={{borderRadius:'1em', height:"35vh", width:"92%", borderRadius:"1em"}}
                />}
                <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                </h5>
                <div className="ratings mt-auto">
                    <div className="rating-outer">
                    <div className="rating-inner" style={{width: `${product.ratings/5 * .0}%` }}></div>
                    </div>
                    <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                </div>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                </div>
            </div>
        </div>
    )
}