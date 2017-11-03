//NECESSARY???????????


import { connect } from 'react-redux';
import values from "lodash/values";
import MentorPanel from './MentorPanel';
import { fetchMentees } from '../../actions/mentee_actions';

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
)(MentorPanel);
