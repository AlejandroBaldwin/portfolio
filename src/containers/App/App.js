import React from 'react';
import { Switch, Route } from 'react-router';

import SearchBar from '../../components/SearchBar/SearchBar';
import Homepage from '../../pages/Homepage/Homepage.pages';
import Stock from '../../pages/Stock/Stock.page';

import './App.css';
///////////////////////////////////////////////////////////////////////////////////////

const App = () => {
  return (
    <section >
      <SearchBar />
      <Switch >
        <Route path='/' exact component={Homepage} />
        <Route path='/stock/:stockId' exact component={Stock} />
      </Switch>
    </section>
  )
}

export default App;