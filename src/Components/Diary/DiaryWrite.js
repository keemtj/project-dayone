import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import classNames from 'classnames/bind';
import styles from '../Style/DiaryWrite.module.scss';

const cx = classNames.bind(styles);

const DiaryWrite = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '일기를 적어보세요',
      modules: {
        toolbar: [
          [{ font: [] }, { size: [] }],
          ['image'],
          ['underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'link'],
        ],
      },
      formats: [
        'font',
        'size',
        'image',
        'bold',
        'italic',
        'underline',
        'strike',
        'ordered',
        'bullet',
        'blockquote',
        'link',
      ],
    });
  }, []);
  return <div className={cx('writer')} ref={quillElement} />;
};

export default DiaryWrite;
