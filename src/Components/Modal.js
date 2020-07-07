import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = () => {
  return <div className={cx('modal')}>모달창 입니다.</div>;
};

export default Modal;
