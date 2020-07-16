import React, { useRef, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Login.module.scss';
import { LoginContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const Login = () => {
  const context = useContext(LoginContext);
  const {
    loginState,
    fetchChange,
    fetchUserCheck,
    fetchErrorMessage,
    fetchReset,
    dispatch,
  } = context;
  const { users, message } = loginState;
  const { id, password } = loginState.inputs;
  const idInputFocus = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    fetchChange(name, value); // dispatch({ type: 'CHANGE_INPUT', name, value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    users.map(
      (user) =>
        user.userId === id && user.userPw === password
          ? fetchUserCheck(id, password) // dispatch({ type: 'USER_CHECK', userId: id, password })
          : fetchErrorMessage(), // dispatch({ type: 'ERROR_MESSAGE' }),
    );

    dispatch({
      type: 'GET_USER_DATA',
      data: users.filter(
        ({ userId, userPw }) => userId === id && userPw === password,
      )[0],
    });

    fetchReset(); // dispatch({ type: 'RESET_INPUT' });
    idInputFocus.current.focus();
  };

  return (
    <main className={cx('loginWrapper')}>
      <h1>DAY ONE</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디"
          name="id"
          value={id}
          onChange={onChange}
          ref={idInputFocus}
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onChange}
        />
        <span className={cx('message')}>{message}</span>
        <button type="submit">로그인</button>
      </form>
    </main>
  );
};

export default Login;
