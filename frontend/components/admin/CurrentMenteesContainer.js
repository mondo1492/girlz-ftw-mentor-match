import { connect } from 'react-redux';
import values from "lodash/values";
import CurrentMentees from './CurrentMentees';
import { fetchMentees, updateMentee } from '../../actions/mentee_actions';
import { fetchMentors, updateMentor } from '../../actions/mentor_actions';
// import { allMentees } from '../../reducers/selectors';

const mapStateToProps = state => {
  return ({
    mentees: values(state.mentees),
    mentors: values(state.mentors),
    currentUser: state.session.currentUser
  });

};

const mapDispatchToProps = dispatch => ({
  fetchMentees: () => dispatch(fetchMentees()),
  updateMentee: (mentee) => dispatch(updateMentee(mentee)),
  fetchMentors: () => dispatch(fetchMentors()),
  updateMentor: (mentor) => dispatch(updateMentor(mentor))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentMentees);
