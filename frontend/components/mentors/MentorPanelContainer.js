import { connect } from 'react-redux';
import values from "lodash/values";
import MentorPanel from './MentorPanel';
import { fetchMentor } from '../../actions/mentor_actions';


const mapStateToProps = state => ({
  mentees: values(state.session.currentUser.mentees),
  currentUser: state.session.currentUser,
  mentor: values(state.mentors)
});

const mapDispatchToProps = dispatch => ({
  fetchMentor: id => dispatch(fetchMentor(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MentorPanel);
