import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // window.location.assign("https://www.girlzftw.com");
    this.props.logout();
  }

  button() {
    return(
      <div className="logout-button">
        <Button bsStyle="danger" onClick={this.handleSubmit}>Logout</Button>
      </div>
    );
  }

  render() {
    let display = this.props.loggedIn ? this.button() : "";
    return (
      <div>
        {display}
      </div>
    );
  }
}

export default withRouter(Logout);
