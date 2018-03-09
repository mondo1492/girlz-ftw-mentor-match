import merge from 'lodash/merge';

import {RECEIVE_ERRORS} from '../actions/session_actions';

import {
  RECEIVE_MENTORS,
  RECEIVE_MENTOR,
  REMOVE_MENTOR
} from '../actions/mentor_actions';

const MentorReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_MENTORS:
      return action.mentors;
    case RECEIVE_MENTOR:
      const newMentor = {[action.mentor.id]: action.mentor};
      return merge({}, state, newMentor);
    case REMOVE_MENTOR:
      delete newState[action.mentor.id];
      return newState;
    case RECEIVE_ERRORS:
        const errors = action.errors;
        return merge({}, {
          errors
        });
    default:
      return state;
  }
};

export default MentorReducer;
