import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '@components/global/header';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact strict path='/' component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
