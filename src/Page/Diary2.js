// import React from 'react';
// import classNames from 'classnames/bind';
// import styles from './Style/Diary.module.scss';

// const cx = classNames.bind(styles);

// const Diary = () => {
//   return (
//     <main className={cx('wrapper')}>
//       <h1 className={cx('a11yHidden')}>다이어리</h1>
//     </main>
//   );
// };

// export default Diary;

import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import classNames from 'classnames/bind';
import styles from './Style/Diary.module.scss';

const cx = classNames.bind(styles);

const Diary = () => {
  return (
    <main className={cx('wrapper')}>
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(editor) => {
          console.log('Focus.', editor);
        }}
      />
    </main>
  );
};

export default Diary;
