import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Watch from './components/Watch';
import Upload from './components/Upload';
import Login from './components/Login';

export default (
  <Route component={App}>
    <Route path='/' component={Home}/>
      <Route path='/watch/:vKey' component={Watch} />
      <Route path='/upload' component={Upload} />
      <Route path='/login' component={Login} />
  </Route>
);
