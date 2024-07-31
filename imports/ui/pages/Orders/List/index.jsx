import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';

const SourcesList = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);

    const getOrdersList = () => {
        Meteor.call('getAllOrders', page, (err, res) => {
            if (!err) {
                setList((prevList) => [...prevList, ...res]);
                if (res.length < Meteor.settings.public.pageSize) {
                    setPage(-1);
                } else {
                    setPage((p) => p + 1);
                }
            } else {
                // error
            }
        });
    };

    useEffect(() => {
        getOrdersList();
    }, []);

    return (
        <div className="order-list">
            {list.map(({ cartValue, items, _id, createdAt, createdBy }) => (
                <Link to={`/orders/details/${_id}`} key={_id}>
                    <div className="order-card-container">
                        <div className="order-name">₹{cartValue}</div>
                        <div className="order-updated-on-by">
                            {DateTime.now(createdAt).toFormat(
                                'hh:mm MMMM dd, yyyy'
                            )}{' '}
                        </div>
                        <div className="order-items">
                            Total Items: {items.length}
                        </div>
                    </div>
                </Link>
            ))}
            {page !== -1 && (
                <Button
                    onClickHandler={() => {
                        getOrdersList();
                    }}
                >
                    Load More
                </Button>
            )}
        </div>
    );
};

export default SourcesList;
