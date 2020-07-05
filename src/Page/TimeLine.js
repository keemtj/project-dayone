import React, { useEffect } from 'react';
import axios from 'axios';
import diaryApi from '../Api/diaryApi';

const Timeline = () => {
  const getData = async () => {
    const data = await axios.get('api/users');
    console.log(data.data);
  };

  useEffect(() => {
    // getData();
    diaryApi.getDiaries();
  }, []);

  return (
    <div>
      <h1>타임라인</h1>
      <p>타임라인, 여기에 네가 쓴 일기가 다 보인단다</p>
    </div>
  );
};

export default Timeline;
