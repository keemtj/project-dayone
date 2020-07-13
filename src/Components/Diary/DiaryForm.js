import React from 'react';
import DiaryWrite from './DiaryWrite';
import DiaryTitle from './DiaryTitle';
import DiaryCalender from './DiaryCalender';
import DiaryMap from './DiaryMap';
import DiarySubmitBtn from './DiarySubmitBtn';

const DiaryForm = () => {
  return (
    <form>
      <DiaryTitle />
      <DiaryCalender />
      <DiaryWrite />
      <DiaryMap />
      <DiarySubmitBtn />
    </form>
  );
};

export default DiaryForm;
