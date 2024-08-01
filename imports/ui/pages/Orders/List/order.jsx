import React from 'react';
import { DateTime } from 'luxon';

const Order = ({ cartValue, createdAt, items }) => {
    return (
        <div className="order-card-container">
            <div className="order-name">₹{cartValue}</div>
            <div className="order-updated-on-by">
                {DateTime.now(createdAt).toFormat('hh:mm MMMM dd, yyyy')}{' '}
            </div>
            <div className="order-items">Total Items: {items.length}</div>
        </div>
    );
};

export default Order;
