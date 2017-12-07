import React from 'react';
import { Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';


class Page1 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Username *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsUsername"
                type="text"
                name="username"
                placeholder=""
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Password *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsPassword"
                type="password"
                name="password"
                placeholder=""
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              First Name *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsFirstName"
                type="text"
                name="first_name"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Last Name *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsLastName"
                type="text"
                name="last_name"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Age *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsAge"
                type="number"
                name="age"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Email *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsEmail"
                type="email"
                name="email"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
        </div>
      )
    }
  }

export default Page1;
