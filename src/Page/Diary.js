import React, { Component, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import classNames from 'classnames/bind';
import styles from './Style/Diary.module.scss';

const cx = classNames.bind(styles);

class Diary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  modules = {
    toolbar: {
      container: [
        [{ font: [] }, { size: [] }],
        ['image'],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'link'],
      ],
    },
    clipboard: {
      matchVisual: false,
    },
  };

  formats = [
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
  ];

  // onChangeArticleTitle = (value) => {
  //   this.setState({
  //     article: {
  //       ...this.state.article,
  //       title: value
  //     }
  //   })
  // }

  render() {
    return (
      <>
        <h1>test</h1>
        <ReactQuill
          ref={(el) => (this.quill = el)}
          // value={this.state.article.content}
          onChange={(e) => console.log('')}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
        />
      </>
    );
  }
}

export default Diary;

//   const quillElement = useRef(null);
//   const quillInstance = useRef(null);

//   useEffect(() => {
//     quillInstance.current = new ReactQuill(quillElement.current, {
//       theme: 'snow',
//       placeholder: '일기를 적어보세요',
//       modules: {
//         toolbar: [
//           [{ font: [] }, { size: [] }],
//           ['image'],
//           ['bold', 'italic', 'underline', 'strike'],
//           [{ list: 'ordered' }, { list: 'bullet' }],
//           ['blockquote', 'link'],
//         ],
//       },
//       formats: [
//         'font',
//         'size',
//         'image',
//         'bold',
//         'italic',
//         'underline',
//         'strike',
//         'ordered',
//         'bullet',
//         'blockquote',
//         'link',
//       ],
//     });
//   }, []);

//   return (
//     <main className={cx('wrapper')}>
//       <div className={cx('writer')} ref={quillElement} />
//     </main>
//   );
// };

// export default Diary;
