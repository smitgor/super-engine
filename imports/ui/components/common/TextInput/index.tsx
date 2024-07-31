import React from 'react';

interface TextInputProps
    extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
    label: string;
    error: any;
    placeholder: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    ({ children, label, error, ...props }, ref) => {
        return (
            <div className={`text-input-container ${error ? 'has-error' : ''}`}>
                <label> {label} </label>
                <input {...props} ref={ref} />
                {error && <div className="input-error">{error}</div>}
                {children}
            </div>
        );
    }
);

export default TextInput;
