import { connect } from 'react-redux';
import values from "lodash/values";
import CurrentMentees from './CurrentMentees';
import { fetchMentees, updateMentee } from '../../actions/mentee_actions';
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
)(CurrentMentees);
