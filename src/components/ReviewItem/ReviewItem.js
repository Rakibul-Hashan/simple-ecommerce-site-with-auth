import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { name, img, seller, ratings, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt={name} />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-detail">
                    <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p className="price">Price <span className="orange-color">{price}</span></p>
                    <p>Shipping: <small>{shipping}</small></p>
                    <p>Quantity: <small>{quantity}</small></p>
                </div>
                <div className="review-item-delete" onClick={() => handleRemoveProduct(product)}>
                    <button className='delete-button'> <FontAwesomeIcon className='delete-icon' icon={faTrashCan} /></button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;