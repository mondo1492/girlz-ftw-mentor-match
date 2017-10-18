import merge from 'lodash/merge';

import {RECEIVE_ERRORS} from '../actions/session_actions';

import {
  RECEIVE_MENTEES,
  RECEIVE_MENTEE,
  REMOVE_MENTEE
} from '../actions/mentee_actions';

const MenteeReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_MENTEES:
      return action.mentees;
    case RECEIVE_MENTEE:
      const newMentee = {[action.mentee.id]: action.mentee};
      return merge({}, state, newMentee);
    case REMOVE_MENTEE:
      delete newState[action.mentee.id];
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

export default MenteeReducer;
