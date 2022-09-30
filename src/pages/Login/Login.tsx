import React, { useState } from 'react';
import { User } from '../../models';
import { loginService } from '../../services';

interface Props {
  login: (user: User | undefined) => void;
}

interface State {
  username: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessful: boolean;
}

const Login = (props: Props) => {
  const [loginFormData, setLoginFormData] = useState<State>({
    username: '',
    password: '',
    loginAttempted: false,
    loginSuccessful: false,
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loggedUser: User | undefined = await loginService(loginFormData.username, loginFormData.password);
    props.login(loggedUser);
    setLoginFormData({
      ...loginFormData,
      loginAttempted: true,
      loginSuccessful: !!loggedUser,
    });
  };

  return (
    <div>
      <h2>Please login</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' name='username' type='text' onChange={changeHandler} value={loginFormData.username} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={changeHandler}
            value={loginFormData.password}
          />
        </div>
        <button>Login</button>
        {loginFormData.loginAttempted && !loginFormData.loginSuccessful && <div>Login failed</div>}
      </form>
    </div>
  );
};
export default Login;
