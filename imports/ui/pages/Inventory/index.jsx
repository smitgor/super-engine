import React from 'react';
import Button from '../../components/common/Button';

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
                                <div>
                                    <img src={`items/${item}`} alt="" />
                                </div>
                                <div>
                                    <h2>
                                        {item.substring(
                                            0,
                                            item.indexOf('.avif')
                                        )}
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
                                    {i === 1 && (
                                        <div className="ai-alert success">
                                            Smart Suggestion: Stock Up soon, as
                                            the demands going to get high!
                                        </div>
                                    )}
                                    {i % 4 !== 0 && i % 3 === 0 && (
                                        <div className="ai-alert warning">
                                            Smart Suggestion: No need to stock
                                            up as the demand is going down.
                                        </div>
                                    )}
                                    {i % 5 === 0 && (
                                        <div className="ai-alert danger">
                                            Smart Suggestion: Sale is low in
                                            this item, try to sell the stock as
                                            most of these going to get perished
                                            soon.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <Button
                                    onClickHandler={() => {
                                        // dispatch(toggleTheme());
                                    }}
                                >
                                    Update Stock
                                </Button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Orders;
