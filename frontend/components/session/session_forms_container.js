import { connect } from 'react-redux';
import SessionForm from './session_form';
import { receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router';

import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.formType === "login") ? login : signup;
  return {
    processForm: user => dispatch(action(user)),
    resetErrors: () => dispatch(receiveErrors([]))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
