import { connect } from 'react-redux';
import values from "lodash/values";
import UnapprovedMentees from './UnapprovedMentees';
import { fetchMentees } from '../../actions/mentee_actions';
// import { allMentees } from '../../reducers/selectors';

const mapStateToProps = state => ({
  mentees: values(state.mentees),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchMentees: () => dispatch(fetchMentees())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnapprovedMentees);
