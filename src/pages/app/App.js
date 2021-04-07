import React, { useEffect } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getDataAction } from './store/appActions';
import routes from '../../services/routes';

const App = () => {

  const appState = useSelector((state) => state.appState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!appState.loaded) {
      dispatch(getDataAction());
    }
  }, [appState, dispatch]);

  return (
    <div className="container mx-auto w-screen h-screen overflow-hidden">
      <div className="">
        <Switch>
          {
            routes.map((route, idx) => {
              const { exact, path, component } = route;
              return <Route key={idx} exact={exact} path={path} component={component} />
            })
          }
        </Switch>
        <Redirect to="/wallet" />
      </div>
    </div>
  );
};

export default App;
