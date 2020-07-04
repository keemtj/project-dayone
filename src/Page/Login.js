import React from 'react';
import classNames from 'classnames';
import styles from './Style/Login.module.scss';

const cx = classNames.bind(styles);

const Login = () => {
  // 임시로 설정
  const accountCheck = false;

  return (
    <div className={cx('loginWrapper')}>
      <h1>DAY ONE</h1>
      <form>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        {accountCheck || (
          <span>가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.</span>
        )}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
