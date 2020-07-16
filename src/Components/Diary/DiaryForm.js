import React from 'react';
import DiaryWrite from './DiaryWrite';
import DiaryTitle from './DiaryTitle';
import DiaryCalender from './DiaryCalender';
import DiaryMap from './DiaryMap';
import DiarySubmitBtn from './DiarySubmitBtn';
import DiaryTagBox from './DiaryTagBox';

const DiaryForm = () => {
  return (
    <form>
      <DiaryTitle />
      <DiaryCalender />
      <DiaryWrite />
      <DiaryMap />
      <DiaryTagBox />
      <DiarySubmitBtn />
    </form>
  );
};

export default DiaryForm;
