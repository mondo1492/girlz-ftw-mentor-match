import { connect } from 'react-redux';
import MentorApp from './MentorApp';
import { createMentor } from '../../actions/mentor_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createMentor: mentorInfo => dispatch(createMentor(mentorInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorApp);
