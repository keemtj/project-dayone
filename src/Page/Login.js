import React, { useRef, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Login.module.scss';
import { loginContext } from '../Context/loginContext';

const cx = classNames.bind(styles);

const Login = () => {
  const context = useContext(loginContext);
  const {
    state,
    fetchChange,
    fetchUserCheck,
    fetchErrorMessage,
    fetchReset,
  } = context;
  const { users, message } = state;
  const { id, password } = state.inputs;
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
    fetchReset(); // dispatch({ type: 'RESET_INPUT' });
    idInputFocus.current.focus();
  };

  return (
    <div className={cx('loginWrapper')}>
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
    </div>
  );
};

export default Login;
