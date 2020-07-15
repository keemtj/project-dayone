import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { useHistory, Link, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Style/DiarySublist.module.scss';
import { CalendarContext } from '../Context/CalendarContext';
import { MapContext } from '../Context/MapContext';
import DiaryViewer from '../Page/DiaryViewer';

const cx = classNames.bind(styles);

const DiarySublist = () => {
  const calCtx = useContext(CalendarContext);
  const mapCtx = useContext(MapContext);

  const calendarList = calCtx && calCtx.calendarState.sublist;
  const mapList = mapCtx && mapCtx.mapState.sublist;

  const currentPage = useLocation().pathname;
  const subList = currentPage === '/calendar' ? calendarList : mapList;
  const history = useHistory();

  const writeDiary = () => history.push('/diary');

  return (
    <>
      <ul className={cx('diaryList')}>
        <button type="button" className={cx('addBtn')} onClick={writeDiary}>
          +
        </button>
        <li className={cx('message')}>
          {subList.length ? null : '일기를 작성해 주세요'}
        </li>
        {subList.map(({ id, title, date, location, imagePaths }) => {
          return (
            <li key={id} className={cx('diary')}>
              <Link to={`/diaryViewer/${id}`}>
                <img
                  src={
                    imagePaths.length
                      ? imagePaths[0]
                      : 'https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png'
                  }
                  alt="thumbnail"
                  className={cx('thumbnail')}
                />
                <div className={cx('info')}>
                  <h2 className={cx('title')}>{title}</h2>
                  <p className={cx('details')}>{date}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Route path="/diaryViewer/:id" component={DiaryViewer} />
    </>
  );
};

export default DiarySublist;
