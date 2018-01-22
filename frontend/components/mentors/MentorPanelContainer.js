import { connect } from 'react-redux';
import values from "lodash/values";
import MentorPanel from './MentorPanel';

const mapStateToProps = state => ({
  mentees: values(state.session.currentUser.mentees),
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(MentorPanel);
