import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {
          username: "",
          password: ""
        }
      };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if (this.state.formType !== nextProps.formType) {
      this.props.resetErrors();
      this.setState({
        user: {
          username: "",
          password: ""
        }
      });
    }
    if (nextProps.loggedIn) {
      this.props.resetErrors();
      if (this.state.user.username === "admin") {
        this.props.history.push('/admin_panel');
      } else {
        // TODO: fix mentor login
        this.props.history.push('/mentor_panel');
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({
      user: Object.assign(this.state.user, { [field]: e.currentTarget.value })
    });
  }

  renderErrors() {
    const errors = this.props.errors ? this.props.errors : [];
    return(
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-box">
          {this.renderErrors()}
          <form onSubmit={(e)=>e.preventDefault} className="login-form">
            <input autoFocus
              type="text"
              value={this.state.user.username}
              onChange={this.update('username')}
              className="login-input"
              placeholder="Username"
            />
            <input type="password"
              value={this.state.user.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
            <Button onClick={this.handleSubmit}>Login</Button>
            </form>
          </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
