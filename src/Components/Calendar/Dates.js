import React from 'react';
import classNames from 'classnames/bind';
import calendarStyles from '../Style/CustomCalendar.module.scss';
import diaryStyles from '../Style/ModalCalendar.module.scss';

const Dates = ({ pageCtx, onClickDate, dateState }) => {
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

  const getStyle = (dd, clickedDate, fullDate) => {
    const maintain = clickedDate === fullDate && page === 'diary';
    const diaryML = dd === 1 ? `${startDay * 3.6}rem` : 0;
    const calML = dd === 1 ? `${startDay * 6}rem` : 0;
    const border = maintain ? '2px solid rgb(255, 114, 98)' : 'none';
    const borderRadius = maintain ? '3px' : 0;

    return {
      marginLeft: page === 'diary' ? diaryML : calML,
      border,
      borderRadius,
    };
  };

  const disableBtn = (yy, mm, dd) => {
    let disable = false;
    if (yy === now.year && mm === now.month && dd > now.date) disable = true;
    if (yy === now.year && mm > now.month) disable = true;
    if (yy > now.year) disable = true;
    return disable;
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
              'dateBtn',
              `${fullDate}`,
              `${getColorByAmount(fullDate)}`,
              {
                today: yy === now.year && mm === now.month && dd === now.date,
              },
              { firstDay: dd === 1 },
            )}
            disabled={disableBtn(yy, mm, dd)}
            style={getStyle(dd, dateState, fullDate)}
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
