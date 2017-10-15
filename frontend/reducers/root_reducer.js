import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MenteeReducer from './mentee_reducer';
import MentorReducer from './mentor_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  mentors: MentorReducer,
  mentees: MenteeReducer
});

export default rootReducer;
