import React from 'react';
import { Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


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
                value={this.props.page.username}
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
                value={this.props.page.password}
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
                value={this.props.page.first_name}
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
                value={this.props.page.last_name}
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
                value={this.props.page.age}
                name="age"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <FontAwesome name='envelope-o'/>
            </InputGroup.Addon>
            <FormControl
              id="formControlsEmail"
              type="email"
              name="email"
              value={this.props.page.email}
              onChange={this.props.handleInputChange}
            />
          </InputGroup>
        </div>
      )
    }
  }

export default Page1;
