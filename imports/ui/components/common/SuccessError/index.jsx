import React from 'react';
import Modal from '../Modal';
import Button from '../Button';

const SuccessError = ({ type, okHandler, message }) => {
    return (
        <Modal>
            <div className="success-error-container">
                <div>
                    <img
                        src={`/icons/${
                            type === 'success' ? 'success.png' : 'failed.png'
                        }`}
                        alt={type}
                    />
                </div>
                <div className="message-wrapper">
                    <div>{message}</div>
                    <Button onClickHandler={okHandler}>Ok</Button>
                </div>
            </div>
        </Modal>
    );
};

export default SuccessError;
