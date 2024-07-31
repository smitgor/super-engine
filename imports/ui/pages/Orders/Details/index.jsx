import React from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';

import Button from '../../../components/common/Button';
import Loading from '../../../components/common/Loading';
import GoBack from '../../../components/common/GoBack';

import useFetch from '../../../hooks/useFetch';

const OrderDetails = () => {
    const orderId = useParams().orderId || '';

    const { isLoading, apiData: orderData } = useFetch('getOrderDetails', [
        orderId,
    ]);
    console.log('ord', orderData);
    return (
        <div>
            <div className="heading flex-justify-space-between">
                <GoBack />
                {!isLoading && orderData && (
                    <Button
                        onClickHandler={() => {
                            // TODO: Share order bill link
                        }}
                    >
                        Share
                    </Button>
                )}
            </div>
            <div className="order-details-container">
                {isLoading && (
                    <div className="simple-container">
                        <Loading
                            isFullPage={false}
                            loadingText="getting order details.."
                        />
                    </div>
                )}
                {!isLoading && orderData && (
                    <>
                        <div className="sub-heading flex-justify-space-between">
                            <span>{orderData.name}</span>
                        </div>
                        <div className="order-list">
                            <div className="simple-container">
                                <div className="order-meta-line">
                                    {DateTime.now(orderData.createdOn).toFormat(
                                        'hh:mm MMMM dd, yyyy'
                                    )}{' '}
                                </div>
                                <div className="order-meta-line">
                                    Purchased by {orderData.customer}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default OrderDetails;
