import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page8 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
          <div className='white_text centerText'>
            <h3>
              Thanks for applying! We're excited to read your application!
            </h3>
            <h5>You should receive a confirmation email shortly.</h5>
            <p>Feel free to log in
              <a href="https://girlzftwportal.herokuapp.com/#/"> here </a>
               to view and update your application.</p>
          </div>
      )
    }
  }

export default Page8;
