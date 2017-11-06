import React from 'react';
import { Link, withRouter } from 'react-router-dom';



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
        <button onClick={this.handleSubmit}>Logout</button>
      </div>
    );
  }

  render() {
    console.log(this.props.loggedIn);
    let display = this.props.loggedIn ? this.button() : "";
    return (
      <div>
        {display}
      </div>
    );
  }
}

export default withRouter(Logout);
