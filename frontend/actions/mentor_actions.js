import * as APIUtil from '../util/mentor_util';

export const RECEIVE_MENTORS = 'RECEIVE_MENTORS';
export const RECEIVE_MENTOR = 'RECEIVE_MENTOR';
export const REMOVE_MENTOR = "REMOVE_MENTOR";
// export const REQUEST_MENTOR = 'REQUEST_MENTOR';

export const receiveMentors = mentors => ({
  type: RECEIVE_MENTORS,
  mentors
});

export const receiveMentor = mentor => ({
  type: RECEIVE_MENTOR,
  mentor
});

export const removeMentor = mentor => ({
  type: REMOVE_MENTOR,
  mentor
});

export const fetchMentors = () => dispatch => (
  APIUtil.fetchMentors().then(mentors => (
    dispatch(receiveMentors(mentors))
  ))
);

export const fetchMentor = id => dispatch => (
  APIUtil.fetchMentor(id).then(mentor => (
    dispatch(receiveMentor(mentor))
  ))
);

export const createMentor = mentor => dispatch => (
  APIUtil.createMentor(mentor).then(mentor => {
    return (
      dispatch(receiveMentor(mentor))
    );
  }, err => {
  })
);

export const updateMentor = mentor => dispatch => (
  APIUtil.updateMentor(mentor).then(mentor => dispatch(receiveMentor(mentor)))
);

export const deleteMentor = mentor => dispatch => (
  APIUtil.deleteMentor(mentor).then(() => dispatch(removeMentor(mentor))));
