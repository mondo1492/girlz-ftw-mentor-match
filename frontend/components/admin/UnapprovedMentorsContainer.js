import { connect } from 'react-redux';
import values from "lodash/values";
import UnapprovedMentors from './UnapprovedMentors';
import { fetchMentors } from '../../actions/mentor_actions';
// import { allMentors } from '../../reducers/selectors';

const mapStateToProps = state => ({
  mentors: values(state.mentors),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchMentors: () => dispatch(fetchMentors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnapprovedMentors);
