import { connect } from 'react-redux';
import values from "lodash/values";
import MenteeSelection from './MenteeSelection';

const mapStateToProps = state => ({
  mentees: values(state.session.currentUser.mentees),
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(MenteeSelection);
