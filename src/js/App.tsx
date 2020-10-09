import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '@components/global/Header';
import HomeShowcase from '@components/home_page/HomeShowcase';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact strict path='/' component={HomeShowcase} />
      </Switch>
    </>
  );
};

export default App;
