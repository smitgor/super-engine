import React from 'react';

const stats = [
    {
        label: 'Revenue',
        value: 10000,
        change: 10,
    },
    {
        label: 'Profit',
        value: 5000,
        change: 20,
    },
    {
        label: 'Buyers',
        value: 50,
        change: 9,
    },
];

const Stats = () => {
    return (
        <div className="stats-container">
            <div className="sub-heading flex-justify-space-between">
                <span>Statistics</span>
                <img alt="activity" src="/icons/statistics.png" />
            </div>
            <div className="simple-container no-top-padding">
                <p>Last 24 hours</p>
                <ul className="stats-list flex-justify-space-between">
                    {stats.map(({ label, value, change }) => (
                        <li key={label}>
                            <div className="label">{label}</div>
                            <div className="value">
                                {value}
                                <span className={change < -1 ? 'down' : 'up'}>
                                    {change > -1 ? '+' : ''}
                                    {change}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Stats;
