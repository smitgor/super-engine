import React from 'react';
import Stats from './Stats';
import CronStats from './OrderStats';
import HourlyStats from './HourlyStats';

const Home = () => {
    return (
        <div>
            <div className="heading">Home</div>
            <div className="simple-container home-container">
                <div>
                    <Stats />
                    <HourlyStats />
                </div>
                <CronStats />
            </div>
        </div>
    );
};

export default Home;
