import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import SourcesList from './List';

const Sources = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="heading flex-justify-space-between">
                <span>Sources</span>
                <Button
                    onClickHandler={() => {
                        navigate('/sources/create');
                    }}
                >
                    Create
                </Button>
            </div>
            <SourcesList />
        </div>
    );
};

export default Sources;
