import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../store/features/userSlice';
import { toggleTheme } from '../../store/features/themeSlice';
import Button from '../../components/common/Button';

const Settings = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.theme.theme);
    const currentUser = useSelector((state) => state.user.userData);
    return (
        <div>
            <div className="heading">Settings</div>
            <div className="simple-container">
                <p>Current theme - {currentTheme}</p>
                <Button
                    onClickHandler={() => {
                        dispatch(toggleTheme());
                    }}
                >
                    Toggle theme
                </Button>
            </div>
            <div className="simple-container">
                <p>{currentUser.username}</p>
                <Button
                    onClickHandler={() => {
                        dispatch(logOutUser());
                    }}
                >
                    Log out
                </Button>
            </div>
        </div>
    );
};

export default Settings;
