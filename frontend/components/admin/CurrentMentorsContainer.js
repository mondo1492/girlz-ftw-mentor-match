import { connect } from 'react-redux';
import values from "lodash/values";
import CurrentMentors from './CurrentMentors';
import { fetchMentors } from '../../actions/mentor_actions';

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
)(CurrentMentors);
