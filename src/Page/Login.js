import React, { useReducer } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Login.module.scss';

const cx = classNames.bind(styles);

const initialState = {
  inputs: {
    userId: '',
    userPw: '',
  },
  users: [
    {
      id: 1,
      userId: 'test',
      userPw: '1234',
      active: false,
    },
    {
      id: 2,
      userId: 'test2',
      userPw: '1234',
      active: false,
    },
    {
      id: 3,
      userId: 'test3',
      userPw: '1234',
      active: false,
    },
  ],
};

const reducer = (state, action) => {
  return state;
};
const Login = () => {
  // 임시로 설정
  const [state, dispatch] = useReducer(reducer, initialState);

  const accountCheck = false;

  return (
    <div className={cx('loginWrapper')}>
      <h1>DAY ONE</h1>
      <form>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <span className={cx('message')}>
          {accountCheck
            ? '가입하지 않은 아이디이거나, 잘못된 비밀번호 입니다.'
            : ''}
        </span>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
