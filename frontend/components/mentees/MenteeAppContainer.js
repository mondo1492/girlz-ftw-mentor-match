import { connect } from 'react-redux';
import MenteeApp from './MenteeApp';
import { createMentee } from '../../actions/mentee_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createMentee: (menteeInfo) => dispatch(createMentee(menteeInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenteeApp);
