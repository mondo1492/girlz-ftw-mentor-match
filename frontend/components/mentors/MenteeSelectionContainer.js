import { connect } from 'react-redux';
import values from "lodash/values";
import MenteeSelection from './MenteeSelection';
import { updateMentee } from '../../actions/mentee_actions';
import { fetchMentor } from '../../actions/mentor_actions';



const mapStateToProps = state => ({
  mentees: values(state.session.currentUser.mentees),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateMentee: (mentee) => dispatch(updateMentee(mentee)),
  fetchMentor: id => dispatch(fetchMentor(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenteeSelection);
