import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, Store, } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { routerMiddleware } from 'connected-react-router';

import rootReducer from '../reducers';
import { IRootState } from '../reducers/initialState';

export const history = createHistory({
  basename: process.env.PUBLIC_URL,
});

const configureStore = (): { store: Store<IRootState> } => {
  const middlewares = [
    routerMiddleware(history),
    thunk,
  ];

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [
    middlewareEnhancer,
  ];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    rootReducer(history),
    undefined,
    composedEnhancers
  );

  return { store };
};

export default configureStore;
