/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/MypageModal.module.scss';

const cx = classNames.bind(styles);

const MypageModal = ({ pageCtx }) => {
  const { closeModal, onClickDimmed, editProfile, pic, msg } = pageCtx;
  const [inputState, setInputState] = useState({ pic, msg });

  const changeInput = ({ target }) => {
    const key = target.className.includes('msg') ? 'msg' : 'pic';
    const value =
      key === 'msg' ? target.value : URL.createObjectURL(target.files[0]);
    setInputState({ ...inputState, [key]: value });
  };

  const deleteImg = () => {
    setInputState({ ...inputState, pic: '' });
  };

  const onSubmit = () => {
    editProfile(inputState.msg, inputState.pic);
    closeModal();
  };

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
          placeholder="사진을 업로드 해주세요"
          value={inputState.pic}
        />
        <label htmlFor="imgInput" className={cx('imgLabel')}>
          사진 업로드
        </label>
        <input
          onChange={changeInput}
          type="file"
          id="imgInput"
          className={cx('imgInput')}
          accept="image/*"
          required
        />
        <button
          type="button"
          className={cx('deleteImgBtn')}
          onClick={deleteImg}
        >
          사진 삭제
        </button>
        <span className={cx('inputName')}>상태 메시지</span>
        <input
          type="text"
          id="msgInput"
          className={cx('msgInput')}
          onChange={changeInput}
          value={inputState.msg}
        />
        <div className={cx('btnWrapper')}>
          <button
            type="button"
            onClick={closeModal}
            className={cx('cancelBtn')}
          >
            취소
          </button>
          <button type="button" className={cx('submitBtn')} onClick={onSubmit}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default MypageModal;
