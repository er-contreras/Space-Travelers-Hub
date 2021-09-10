import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rocketsReducer';

const reducer = combineReducers({
  rockets: rocketsReducer,
  missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
