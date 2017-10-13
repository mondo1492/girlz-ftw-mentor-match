import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
    console.log("NEXT PROPS", nextProps);
    if (nextProps.loggedIn) {
      this.props.resetErrors();
      this.props.history.push('/mentor_panel');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, {formType: this.state.user});
    this.props.processForm(this.state);
  }

  update(field) {
  return e => this.setState({
    user: Object.assign(this.state.user, { [field]: e.currentTarget.value })
  });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.state);
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
              <button onClick={this.handleSubmit}>Login</button>
            </form>
          </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
