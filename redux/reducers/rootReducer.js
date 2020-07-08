import { combineReducers } from 'redux';
import counter from './counterReducer';
import skills from './skillsReducer';
import projects from './projectsReducer';
import isMenuOpen from './menuReducer';

const rootReducer = combineReducers({
  counter,
  skills,
  projects,
  isMenuOpen
});

export default rootReducer;
