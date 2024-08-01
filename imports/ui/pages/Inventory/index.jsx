import React from 'react';

const items = [
    'beetroot.avif',
    'capsicum.avif',
    'carrot.avif',
    'cauliflower.avif',
    'cucumber.avif',
    'garlic.avif',
    'ginger.avif',
    'green-chilli.avif',
    'ladyfinger.avif',
    'lemon.avif',
    'mushroom.avif',
    'onion.avif',
    'potato.avif',
    'tomato.avi',
];

const Orders = () => {
    return (
        <div className="inventory-page-container">
            <div className="heading">{_t('Inventory')}</div>
            <ul>
                {items.map((item, i) => (
                    <li key={item}>
                        <div className="inventory-meta-container">
                            <div>
                                <img src={`items/${item}`} alt="" />
                            </div>
                            <div>
                                <h2>
                                    {item.substring(0, item.indexOf('.avif'))}
                                </h2>
                                {i % 3 === 0 ? (
                                    <span className="available">
                                        Available: 20
                                    </span>
                                ) : (
                                    <span className="unavailable">
                                        Out of Stock
                                    </span>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Orders;
