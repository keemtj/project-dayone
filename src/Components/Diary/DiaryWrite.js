import React, { useRef, useEffect, useContext } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import classNames from 'classnames/bind';
import styles from '../Style/DiaryWrite.module.scss';
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const DiaryWrite = () => {
  const { state, writePost, pushImg } = useContext(MainContext);
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
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'link'],
        ],
      },
      // formats: [
      // ],
    });

    // Quill - text change event 감지
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        writePost(quill.root.innerHTML);
      }
    });

    // console.log(quill, typeof quill);
    // quill.dangerouslySetInnerHTML = { __html: state.currentDiary.content };
    // quill.innerHTML = state.currentDiary.content;
    console.log(quillElement.current.firstElementChild);
    quillElement.current.firstElementChild.innerHTML =
      state.currentDiary.content;
    // quillElement.current.firstElementChild.dangerouslySetInnerHTML = {
    //   __html: state.currentDiary.content,
    // };
  }, []);

  const onBlur = () => {
    const children = [...quillInstance.current.root.children];
    const images = [];

    children.forEach((child) => {
      if (![...child.children].some((v) => v.nodeName === 'IMG')) return;

      [...child.children].forEach((v) => {
        if (v.nodeName !== 'IMG') return;
        images.push(v.src);
      });
    });
    pushImg(images);
  };

  return (
    <>
      <div
        className={cx('writer')}
        ref={quillElement}
        onBlur={onBlur}
        // dangerouslySetInnerHTML={{ __html: state.currentDiary.content }}
      />
      {/* <span>ewfwef</span> */}
    </>
  );
};

export default React.memo(DiaryWrite);
