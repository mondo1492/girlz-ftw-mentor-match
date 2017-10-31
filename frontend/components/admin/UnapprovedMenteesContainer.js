import { connect } from 'react-redux';
import values from "lodash/values";
import UnapprovedMentees from './UnapprovedMentees';
import { fetchMentees, updateMentee } from '../../actions/mentee_actions';
// import { allMentees } from '../../reducers/selectors';

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
)(UnapprovedMentees);
