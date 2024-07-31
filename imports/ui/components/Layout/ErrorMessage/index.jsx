import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../common/Button';
import { clearError } from '../../../store/features/errorSlice';

const ErrorMessage = () => {
    const errorLabel = useSelector((state) => state.error);
    const dispatch = useDispatch();
    return errorLabel.message ? (
        <div className="global-error  card-shadow">
            <div className="flex-justify-space-between">
                <img src="/icons/failed.png" />
                <span>{errorLabel.message}</span>
            </div>
            <Button
                onClickHandler={() => {
                    dispatch(clearError());
                }}
            >
                Close
            </Button>
        </div>
    ) : (
        ''
    );
};

export default ErrorMessage;
