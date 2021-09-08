import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsReducer';
// import missionsReducer from './mission/missions.js';
const reducer = combineReducers({
  rockets: rocketsReducer,
  // missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
