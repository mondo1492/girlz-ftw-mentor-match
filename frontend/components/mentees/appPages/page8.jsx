import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page8 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
          <div className='centerText'>
            <h3>
              Thanks for applying! We're excited to read your application!
            </h3>
            <h5>You should receive a confirmation email shortly.</h5>
          </div>
      )
    }
  }

export default Page8;
