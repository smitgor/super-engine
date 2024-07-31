/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Switch = ({ options, handleChange, title, value }) => {
    const [option1, option2] = options;

    return (
        <>
            {title ? <p className="title">{title}</p> : ''}
            <label className={`Toggle ${value ? 'Toggle--checked' : ''}`}>
                <input
                    type="checkbox"
                    value={value}
                    onChange={() => handleChange(!value)}
                />

                <div className="Toggle__slider" />
                <small className="Toggle__text">{option1.label}</small>
                <small className="Toggle__text">{option2.label}</small>
            </label>
        </>
    );
};

// eslint-disable-next-line import/prefer-default-export
export { Switch };
