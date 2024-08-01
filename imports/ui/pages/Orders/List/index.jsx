import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';
import Order from './order';

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
                    <Order
                        key={_id}
                        cartValue={cartValue}
                        items={items}
                        createdBy={createdBy}
                        createdAt={createdAt}
                    />
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
