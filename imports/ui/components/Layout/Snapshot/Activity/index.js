import React from 'react';

const activities = [
    {
        date: '11 PM, 12th July, 2023',
        label: 'Shivang kar has added a new source',
        id: '1',
    },
    {
        date: '1 AM, 20th Jan, 2023',
        label: 'Vishnu has saved a digest.',
        id: '2',
    },
    {
        date: '1 PM, 4th Aug, 2023',
        label: 'Vedant has added a new user, Partha',
        id: '3',
    },
    {
        date: '11 PM, 12th July, 2023',
        label: 'Shivang kar has added a new source',
        id: '4',
    },
    {
        date: '1 AM, 20th Jan, 2023',
        label: 'Vishnu has saved a digest.',
        id: '5',
    },
    {
        date: '1 PM, 4th Aug, 2023',
        label: 'Vedant has added a new user, Partha',
        id: '6',
    },
    {
        date: '11 PM, 12th July, 2023',
        label: 'Shivang kar has added a new source',
        id: '7',
    },
    {
        date: '1 AM, 20th Jan, 2023',
        label: 'Vishnu has saved a digest.',
        id: '8',
    },
    {
        date: '1 PM, 4th Aug, 2023',
        label: 'Vedant has added a new user, Partha',
        id: '9',
    },
    {
        date: '11 PM, 12th July, 2023',
        label: 'Shivang kar has added a new source',
        id: '10',
    },
    {
        date: '1 AM, 20th Jan, 2023',
        label: 'Vishnu has saved a digest.',
        id: '11',
    },
    {
        date: '1 PM, 4th Aug, 2023',
        label: 'Vedant has added a new user, Partha',
        id: '12',
    },
];

export default function Activity() {
    return (
        <div className="activity-container">
            <div className="sub-heading flex-justify-space-between">
                <span>Activity</span>
                <img alt="activity" src="/icons/activity.png" />
            </div>
            <ul>
                {activities.map(({ label, date, id }) => (
                    <li key={id}>
                        <p>{label}</p>
                        <span>{date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
