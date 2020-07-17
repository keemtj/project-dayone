/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/DiaryTagBox.module.scss';
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const DiaryTagBox = () => {
  const [inputState, setInputState] = useState('');

  const { state, pushTag } = useContext(MainContext);
  const { tags } = state.currentDiary;

  const onChange = (e) => {
    setInputState(e.target.value);
  };

  const onPushTag = (e) => {
    e.preventDefault();
    const writeInput = e.target.type === 'text' && e.keyCode !== 13;
    if (inputState.trim() === '') {
      if (writeInput) return;
      setInputState('');
      return;
    }
    if (writeInput) return;
    pushTag(inputState.trim());
    setInputState('');
  };

  const renderTags = () => {
    if (!tags.length)
      return (
        <>
          <li className={cx('tag')}>#태그1</li>
          <li className={cx('tag')}>#태그2</li>
        </>
      );
    return tags.map((tag, i) => {
      if (i > 4) return '';
      return (
        <li className={cx('tag')} key={i}>
          {i === 4 ? '...' : `#${tag}`}
        </li>
      );
    });
  };

  return (
    <div className={cx('tagBox')}>
      <input
        type="text"
        placeholder="태그를 입력하세요"
        value={inputState}
        onChange={onChange}
        onKeyUp={onPushTag}
      />
      <button type="button" onClick={onPushTag}>
        추가
      </button>
      <ul className={cx('tagList')}>{renderTags()}</ul>
    </div>
  );
};

export default DiaryTagBox;
