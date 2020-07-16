import React from 'react';
import DiaryWrite from './DiaryWrite';
import DiaryTitle from './DiaryTitle';
import DiaryCalender from './DiaryCalender';
import DiaryMap from './DiaryMap';
import DiarySubmitBtn from './DiarySubmitBtn';
import DiaryTagBox from './DiaryTagBox';

const DiaryForm = () => {
  return (
    <form style={{ marginBottom: '60px' }} onSubmit={(e) => e.preventDefault()}>
      <DiaryTitle />
      <DiaryCalender />
      <DiaryMap />
      <DiaryWrite />
      <DiaryTagBox />
      <DiarySubmitBtn />
    </form>
  );
};

export default DiaryForm;
