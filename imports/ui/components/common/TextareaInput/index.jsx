import React from 'react';

const TextareaInput = ({
    register,
    label,
    children,
    error,
    options,
    name,
    registerOptions = {},
    ...rest
}) => {
    return (
        <div className={`text-input-container ${error ? 'has-error' : ''}`}>
            <label htmlFor={name}> {label} </label>
            <textarea
                rows={8}
                id={name}
                {...register(name, registerOptions)}
                {...rest}
            />
            {error && <div className="input-error">{error}</div>}
            {children}
        </div>
    );
};

export default TextareaInput;
