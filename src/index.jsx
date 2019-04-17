/**
 | Core Components
 */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
/**
 | Custom Components
 */
//import AuthorizedRoute from './routes/AuthorizedRoute';
//import LoginDesign from './containers/login/LoginPage';
//import Dashboard from './routes/DashboardRoute';
//import HomePage from './containers/home/HomePage';
import Login from './containers/login/Login';
/**
 * Helpers
 */
import AuthenticationHelper from './helpers/AuthenticationHelper';
/**
 | Reducers
 */
import allReducers from './reducers';

/**
 | Constants
 */
const isDevelopmentMode = (process.env.NODE_ENV !== 'production');

/**
 | Stylesheets
 */
require('../assets1/style/style.less');

/**
 | Logger
 */

/**
 | History
 */
//const createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();

/**
 | Middleware
 */
const middleware = routerMiddleware(history);

/**
 | Store
 */
let store = null;
if (isDevelopmentMode) {
    store = createStore(
        allReducers,
        applyMiddleware(middleware, thunk),
    );
} else {
    store = createStore(
        allReducers,
        applyMiddleware(middleware, thunk),
    );
}

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

/**
 * Auth Check
 * requireAuth could not be used for '/login' path because a route has to be defined for all paths
 * requireAuth uses './login' redirect hence added a Route for '/login' in beforeLogin
 */
function requireAuth() {
    let route = (<Redirect to="/login" />);

    if (AuthenticationHelper.isAuthenticated()) {
        route = (<Redirect to="/dashboard" />);
    }

    return route;
}

/**
 * Before LoginDesign
 * requireAuth could not be used for '/login' path because a route has to be defined for all paths
 * requireAuth uses './login' redirect hence added a Route for '/login' in beforeLogin
 */
function beforeLogin() {
    //let route = null;
    let route = (<Route path="/Home" component={Login} />);
    //<Route path="/login" component={LoginDesign} />

    /*if (AuthenticationHelper.isAuthenticated()) {
        route = (<Redirect to="/dashboard" />);
    }*/

    return route;
}

/**
 | Render
 */
ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <BrowserRouter basename="/">
                <Switch>
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Home" render={beforeLogin} />
                </Switch>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
