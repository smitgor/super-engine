import React from 'react';

const stats = [
    {
        label: 'Cron 4',
        iterations: [
            {
                hasRun: true,
                success: true,
                ranAt: '11 AM',
                contentsAdded: 111,
                runTime: 21,
            },
            {
                ranAt: '1 PM',
                hasRun: false,
            },
        ],
    },
    {
        label: 'Cron 1',
        iterations: [
            {
                hasRun: true,
                success: false,
                ranAt: '12.35 AM',
                contentsAdded: 121,
                runTime: 21,
            },
            {
                ranAt: '5 PM',
                hasRun: false,
            },
        ],
    },
    {
        label: 'Cron 2',
        iterations: [
            {
                hasRun: true,
                success: true,
                ranAt: '11AM',
                contentsAdded: 1,
                runTime: 21,
            },
            {
                ranAt: '11AM',
                hasRun: false,
            },
        ],
    },
    {
        label: 'Cron 3',
        iterations: [
            {
                hasRun: true,
                success: true,
                ranAt: '11AM',
                contentsAdded: 121,
                runTime: 21,
            },
            {
                ranAt: '11AM',
                hasRun: false,
                success: true,
            },
        ],
    },
];

const CronStats = () => {
    return (
        <div className="stats-container cron-stats-container">
            <div className="sub-heading flex-justify-space-between">
                <span>Today&apos;s Orders</span>
                <img alt="activity" src="/icons/reminders.png" />
            </div>
            <p />

            <ul className="cron-stats-list">
                {stats.map(({ label, iterations }) => (
                    <li key={label}>
                        <div className="label">{label}</div>
                        <ul className="cron-iterations">
                            {iterations.map(
                                ({
                                    hasRun,
                                    success,
                                    ranAt,
                                    runTime,
                                    contentsAdded,
                                }) => (
                                    <li
                                        key={`${label}-${ranAt}-${contentsAdded}`}
                                        className={`card-shadow ${
                                            hasRun
                                                ? success
                                                    ? 'success-run'
                                                    : 'error-run'
                                                : 'to-run'
                                        }`}
                                    >
                                        <div className="label">{ranAt}</div>
                                        <div className="ran-meta flex-justify-space-between">
                                            {hasRun ? (
                                                <>
                                                    <span>
                                                        <img
                                                            alt=""
                                                            src="/icons/cron.png"
                                                        />
                                                        {runTime}s
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt=""
                                                            src="/icons/contents.png"
                                                        />
                                                        {contentsAdded}
                                                    </span>
                                                </>
                                            ) : (
                                                <div>Yet to run</div>
                                            )}
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CronStats;
