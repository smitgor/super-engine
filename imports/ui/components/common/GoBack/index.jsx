import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const GoBack = ({ customOnClickHandler }) => {
    const navigate = useNavigate();
    return (
        <Button
            onClickHandler={() => {
                if (!customOnClickHandler) navigate(-1);
                else customOnClickHandler();
            }}
        >
            ← Go Back
        </Button>
    );
};
export default GoBack;
