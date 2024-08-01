import React from 'react';
import { DateTime } from 'luxon';

const Order = ({ cartValue, createdAt, items }) => {
    return (
        <div className="order-card-container">
            <div className="order-main-line">
                <div className="order-name">₹{cartValue}</div>
                <div className="order-updated-on-by">{createdAt}</div>
            </div>
            <div className="order-items">
                <ul className="order-items-list">
                    {[...items].splice(0, 2).map(({ itemId }) => (
                        <li key={itemId}>
                            <img src={`items/${itemId}.avif`} alt={itemId} />
                        </li>
                    ))}
                    {items.length > 3 && (
                        <span> + {items.length - 3} items</span>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Order;
