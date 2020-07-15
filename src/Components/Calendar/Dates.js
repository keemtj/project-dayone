import React from 'react';
import classNames from 'classnames/bind';
import calendarStyles from '../Style/CustomCalendar.module.scss';
import diaryStyles from '../Style/ModalCalendar.module.scss';

const Dates = ({ pageCtx, onClickDate }) => {
  const { page } = pageCtx;
  const cx = classNames.bind(page === 'diary' ? diaryStyles : calendarStyles);
  const { getSublist, diaries, now, datesArray, startDay } = pageCtx;

  const onClick = (e) =>
    page === 'diary' ? onClickDate(e) : getSublist(e, diaries);

  const getColorByAmount = (fullDate) => {
    if (pageCtx.page !== 'calendar') return;
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

    return amount;
  };

  return (
    <div className={cx('dateView')}>
      {datesArray.map(({ yy, mm, dd }) => {
        const fullDate = `${yy}-${mm}-${dd}`;

        return (
          <button
            key={dd}
            type="button"
            className={cx(
              `${fullDate}`,
              `${getColorByAmount(fullDate)}`,
              {
                today: yy === now.year && mm === now.month && dd === now.date,
              },
              { firstDay: dd === 1 },
            )}
            disabled={yy === now.year && mm === now.month && dd > now.date}
            style={{ marginLeft: dd === 1 ? `${startDay * 6}rem` : 0 }}
            onClick={onClick}
          >
            <span className={cx('date')}>{dd}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Dates;
