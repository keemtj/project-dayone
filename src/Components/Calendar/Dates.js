import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/CustomCalendar.module.scss';

const cx = classNames.bind(styles);

const Dates = ({ pageCtx }) => {
  const { getSublist, diaries, now, datesArray, startDay } = pageCtx;

  return (
    <div className={cx('dateView')}>
      {datesArray.map(({ yy, mm, dd }) => {
        const fullDate = `${yy}-${mm}-${dd}`;
        let amount = diaries.filter(({ date }) => date === fullDate).length;

        switch (amount) {
          case 0:
            amount = '';
            break;
          case 1:
            amount = 'oneDiary';
            break;
          case 2 || 3:
            amount = 'someDiaries';
            break;
          default:
            amount = 'manyDiaries';
        }

        return (
          <button
            key={dd}
            type="button"
            className={cx(
              `${fullDate}`,
              `${amount}`,
              {
                today: yy === now.year && mm === now.month && dd === now.date,
              },
              { firstDay: dd === 1 },
            )}
            disabled={yy === now.year && mm === now.month && dd > now.date}
            style={{ marginLeft: dd === 1 ? `${startDay * 6}rem` : 0 }}
            onClick={(e) => getSublist(e, diaries)}
          >
            <span className={cx('date')}>{dd}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Dates;
