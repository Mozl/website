import { combineReducers } from 'redux';
import counter from './counterReducer';
import skills from './skillsReducer';
import experiences from './experiencesReducer';
import testimonials from './testimonialsReducer';
import projects from './projectsReducer';
import isMenuOpen from './menuReducer';

const rootReducer = combineReducers({
  counter,
  skills,
  projects,
  isMenuOpen,
  experiences,
  testimonials
});

export default rootReducer;
