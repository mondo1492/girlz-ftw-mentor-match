import { connect } from 'react-redux';
import values from "lodash/values";
import RejectedMentees from './RejectedMentees';
import { fetchMentees, updateMentee } from '../../actions/mentee_actions';

const mapStateToProps = state => ({
  mentees: values(state.mentees),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchMentees: () => dispatch(fetchMentees()),
  updateMentee: (mentee) => dispatch(updateMentee(mentee))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RejectedMentees);
