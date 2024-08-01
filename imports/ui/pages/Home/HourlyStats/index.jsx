import React from 'react';

const HourlyStats = () => {
    return (
        <div className="stats-container">
            <div className="sub-heading flex-justify-space-between">
                <span>Hourly Sales</span>
                <img alt="activity" src="/icons/cron.png" />
            </div>
            <div className="simple-container no-top-padding">
                <p>Last 24 hours</p>
                <div
                    style={{
                        width: '100%',
                        height: '400px',
                    }}
                >
                    <img
                        style={{
                            width: '100%',
                        }}
                        src="graph.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default HourlyStats;
