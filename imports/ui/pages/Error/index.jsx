import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import FullPageCentered from '../../components/common/FullPageCentered';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <FullPageCentered>
            <div>
                <div className="sub-heading">Something Went wrong</div>

                <div className="simple-container">
                    <Button
                        onClickHandler={() => {
                            navigate('/');
                        }}
                    >
                        Go to Home
                    </Button>
                </div>
            </div>
        </FullPageCentered>
    );
};

export default ErrorPage;
