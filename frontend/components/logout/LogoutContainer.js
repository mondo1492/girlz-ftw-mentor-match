import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import Logout from './Logout';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout));
