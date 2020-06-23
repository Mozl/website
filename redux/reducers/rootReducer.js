import { combineReducers } from 'redux';
import counter from './counterReducer';
import skills from './skillsReducer';

const rootReducer = combineReducers({
  counter,
  skills
});

export default rootReducer;
