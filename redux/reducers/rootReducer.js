import { combineReducers } from 'redux';
import counter from './counterReducer';
import skills from './skillsReducer';
import projects from './projectsReducer';

const rootReducer = combineReducers({
  counter,
  skills,
  projects
});

export default rootReducer;
