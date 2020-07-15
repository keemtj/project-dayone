/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/MypageModal.module.scss';

const cx = classNames.bind(styles);

const MypageModal = ({ pageCtx }) => {
  const { closeModal, onClickDimmed } = pageCtx;

  return (
    <div
      className={cx('dimmed')}
      onClick={onClickDimmed}
      style={{ display: 'block' }}
    >
      <div className={cx('modal')}>
        <span className={cx('inputName')}>프로필 사진</span>
        <input
          type="text"
          readOnly
          className={cx('imgPath')}
          // placeholder="사진을 업로드 해주세요"
          value="image path"
        />
        <label htmlFor="imgInput" className={cx('imgLabel')}>
          사진 업로드
        </label>
        <input type="file" id="imgInput" className={cx('imgInput')} />
        <button type="button" className={cx('deleteImgBtn')}>
          사진 삭제
        </button>
        <span className={cx('inputName')}>상태 메시지</span>
        <label htmlFor="msgInput" className={cx('msgLabel')}></label>
        <input type="text" id="msgInput" className={cx('msgInput')} />
        <div className={cx('btnWrapper')}>
          <button
            type="button"
            onClick={closeModal}
            className={cx('cancelBtn')}
          >
            취소
          </button>
          <button type="button" className={cx('submitBtn')}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default MypageModal;
