import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Admin = ({ component: Component, path, admin }) => (
  <Route path={path} render={(props) => (
     admin ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser),
    admin: (state.session.currentUser.username === "admin")}
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

export const AdminRoute = withRouter(connect(mapStateToProps, null)(Admin));
