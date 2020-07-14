import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TimeLineList from '../Components/TimeLineList';
import TimeLineMedia from '../Components/TimeLineMedia';

const SubRouter = () => {
  return (
    <Switch>
      <Route exact path={['/', '/timeline']} component={TimeLineList} />
      <Route path={['/list', '/timeline/list']} component={TimeLineList} />
      <Route path={['/media', '/timeline/media']} component={TimeLineMedia} />
    </Switch>
  );
};

export default SubRouter;
