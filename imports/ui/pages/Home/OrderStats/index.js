import React from 'react';
import OrderList from '../../Orders/List';

const CronStats = () => {
    return (
        <div className="stats-container cron-stats-container">
            <div className="sub-heading flex-justify-space-between">
                <span>Today&apos;s Orders</span>
                <img alt="activity" src="/icons/reminders.png" />
            </div>
            <OrderList />
        </div>
    );
};

export default CronStats;
