import { connect } from 'react-redux';
import values from "lodash/values";
import RejectedMentors from './RejectedMentors';
import { fetchMentors, updateMentor } from '../../actions/mentor_actions';

const mapStateToProps = state => ({
  mentors: values(state.mentors),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchMentors: () => dispatch(fetchMentors()),
  updateMentor: (mentor) => dispatch(updateMentor(mentor))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RejectedMentors);
