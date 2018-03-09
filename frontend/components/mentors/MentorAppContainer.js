import { connect } from 'react-redux';
import values from "lodash/values";
import MentorApp from './MentorApp';
import { createMentor, fetchMentors } from '../../actions/mentor_actions';

const mapStateToProps = state => ({
  mentors: values(state.mentors),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createMentor: mentorInfo => dispatch(createMentor(mentorInfo)),
  fetchMentors: () => dispatch(fetchMentors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorApp);
