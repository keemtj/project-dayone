/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/DiaryTagBox.module.scss';
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const DiaryTagBox = () => {
  const { state } = useContext(MainContext);
  const { tags } = state.currentDiary;

  console.log(tags);

  const renderTags = () => {
    if (!tags.length)
      return (
        <>
          <li className={cx('tag')}>#태그1</li>
          <li className={cx('tag')}>#태그2</li>
        </>
      );
    return tags.map((tag, i) => (
      <li className={cx('tag')} key={i}>
        {tag}
      </li>
    ));
  };

  return (
    <div className={cx('tagBox')}>
      <input type="text" placeholder="태그를 입력하세요" />
      <button type="button">추가</button>
      <ul className={cx('tagList')}>{renderTags()}</ul>
    </div>
  );
};

export default DiaryTagBox;
