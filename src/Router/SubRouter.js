import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TimeLineList2 from '../Components/TimeLineList2';
import TimeLineMedia from '../Components/TimeLineMedia';

const SubRouter = () => {
  return (
    <Switch>
      <Route exact path={['/', '/timeline']} component={TimeLineList2} />
      <Route path={['/list', '/timeline/list']} component={TimeLineList2} />
      <Route path={['/media', '/timeline/media']} component={TimeLineMedia} />
    </Switch>
  );
};

export default SubRouter;
