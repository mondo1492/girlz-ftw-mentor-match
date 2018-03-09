import { connect } from 'react-redux';
import values from "lodash/values";
import MenteeSelection from './MenteeSelection';
import { updateMentee, receiveErrors } from '../../actions/mentee_actions';
import { fetchMentor } from '../../actions/mentor_actions';


const mapStateToProps = state => ({
  mentees: values(state.session.currentUser.mentees),
  currentUser: state.session.currentUser,
  errors: state.mentees.errors
});

const mapDispatchToProps = dispatch => ({
  updateMentee: (mentee) => dispatch(updateMentee(mentee)),
  fetchMentor: id => dispatch(fetchMentor(id)),
  resetErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenteeSelection);
