import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import OrdersList from './List';

const Sources = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="heading flex-justify-space-between">
                <span>Orders</span>
                <Button
                    onClickHandler={() => {
                        navigate('/sources/create');
                    }}
                >
                    Create Order
                </Button>
            </div>
            <OrdersList />
        </div>
    );
};

export default Sources;
