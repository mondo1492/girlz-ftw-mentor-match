import * as APIUtil from '../util/mentee_util'

export const RECEIVE_MENTEES = 'RECEIVE_MENTEES';
export const RECEIVE_MENTEE = 'RECEIVE_MENTEE';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_MENTEE = "REMOVE_MENTEE";
// export const REQUEST_MENTEE = 'REQUEST_MENTEE';

export const receiveMentees = mentees => ({
  type: RECEIVE_MENTEES,
  mentees
});

export const receiveMentee = mentee => ({
  type: RECEIVE_MENTEE,
  mentee
});

export const removeMentee = mentee => ({
  type: REMOVE_MENTEE,
  mentee
});

export const fetchMentees = () => dispatch => (
  APIUtil.fetchMentees().then(mentees => (
    dispatch(receiveMentees(mentees))
  ))
);

export const fetchMentee = id => dispatch => (
  APIUtil.fetchMentee(id).then(mentee => (
    dispatch(receiveMentee(mentee))
  ))
);

export const createMentee = mentee => dispatch => (
  APIUtil.createMentee(mentee).then(mentee => {
    return (
      dispatch(receiveMentee(mentee))
    );
  }, err => {
  })
);

export const updateMentee = mentee => dispatch => (
  APIUtil.updateMentee(mentee).then(mentee => dispatch(receiveMentee(mentee)))
);

export const deleteMentee = mentee => dispatch => (
  APIUtil.deleteMentee(mentee).then(() => dispatch(removeMentee(mentee))));
