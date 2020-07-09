import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Login.module.scss';

const cx = classNames.bind(styles);

const Login = ({ state, dispatch }) => {
  const idInputFocus = useRef();
  const { users, message } = state;
  const { id, password } = state.inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_INPUT', name, value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    users.map((user) =>
      user.userId === id && user.userPw === password
        ? dispatch({ type: 'USER_CHECK', userId: id, password })
        : dispatch({ type: 'ERROR_MESSAGE' }),
    );
    dispatch({ type: 'RESET_INPUT' });
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
