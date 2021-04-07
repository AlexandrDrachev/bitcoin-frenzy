import { appInitialState, appReducer } from '../pages/app/store/appReducer';

const initialState = {
  appState: appInitialState,
};

const rootReducer = (state = initialState, action) => {
  console.log('action.type: ', action.type);
  const { appState } = state;
  return {
    appState: appReducer(appState, action),
  };
};

export default rootReducer;
