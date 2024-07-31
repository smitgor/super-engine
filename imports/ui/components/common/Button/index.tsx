import React from 'react';

interface ButtonProps {
    onClickHandler?: () => void;
    type: 'submit' | 'reset' | 'button';
    children: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    onClickHandler,
    type = 'button',
    children,
    disabled,
}) => {
    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            onClick={(e) => {
                if (onClickHandler) {
                    e.preventDefault();
                    onClickHandler();
                }
            }}
            className={type === 'submit' ? 'primary' : ''}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    onClickHandler: undefined,
    disabled: false,
};

export default Button;
