import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/common/Button';
import { logInUser } from '../../store/features/userSlice';
import FullPageCentered from '../../components/common/FullPageCentered';

const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({ password: '', username: '' });

    const onChangeHandler = (e, dataPoint) => {
        e.preventDefault();
        setData((prevVal) => ({ ...prevVal, [dataPoint]: e.target.value }));
    };
    return (
        <FullPageCentered>
            <div>
                <div className="heading">Login</div>
                <form>
                    <div>
                        <input
                            type="text"
                            value={data.username}
                            onChange={(e) => onChangeHandler(e, 'username')}
                            placeholder="username"
                        />
                    </div>
                    <br />

                    <div>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => onChangeHandler(e, 'password')}
                            placeholder="password"
                        />
                    </div>
                    <br />
                    <Button
                        onClickHandler={() => {
                            dispatch(logInUser(data));
                        }}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </FullPageCentered>
    );
};

export default Login;
