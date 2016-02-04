import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import AuthActions from './actions/AuthActions';


let history = createBrowserHistory();

let jwt = localStorage.getItem('jwt');
if (jwt) {
        AuthActions.autoLogin();
}

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
