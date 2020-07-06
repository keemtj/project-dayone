import React from 'react';
import { Route } from 'react-router-dom';
import TimeLine from '../Page/TimeLine';
import Calendar from '../Page/Calendar';
import Map from '../Page/Map';
import Diary from '../Page/Diary';
import DiaryViewer from '../Page/DiaryViewer';
import MyPage from '../Page/MyPage';

const MainRouter = () => {
  return (
    <div>
      <Route path={['/', '/timeline']} component={TimeLine} exact />
      <Route path="/map" component={Map} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/diary" component={Diary} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/diaryViewer/:id" component={DiaryViewer} />
    </div>
  );
};

export default MainRouter;
