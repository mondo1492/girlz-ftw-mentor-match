import { connect } from 'react-redux';
import values from "lodash/values";
import MenteeSelection from './MenteeSelection';
import { updateMentee } from '../../actions/mentee_actions';


const mapStateToProps = state => ({
  mentees: values(state.session.currentUser.mentees),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateMentee: (mentee) => dispatch(updateMentee(mentee))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenteeSelection);
