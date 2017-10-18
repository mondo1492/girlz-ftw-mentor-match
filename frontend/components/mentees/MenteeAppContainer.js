import { connect } from 'react-redux';
// import values from "lodash/values";
import MenteeApp from './MenteeApp';
import { createMentee } from '../../actions/mentee_actions';
// import { allMentees } from '../../reducers/selectors';

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
