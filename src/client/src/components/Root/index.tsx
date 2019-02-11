import { History } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import Header from '../../containers/Header';
import HomePage from '../../pages/Home';
import UserListPage from '../../pages/UserList';
import UserNewPage from '../../pages/UserNew';
import UserViewPage from '../../pages/UserView';
import NoMatchPage from '../../pages/NoMatch';
import { routes } from '../../config';

const Root = ({ store, history }: {store: any, history: History}) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path={routes.users.new} component={UserNewPage} />
          <Route path={routes.users.view} component={UserViewPage} />
          <Route path={routes.users.list} component={UserListPage} />
          <Route path={routes.default} component={HomePage} exact={true} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
