import React from 'react';
import { Col, Form, Button, Panel, InputGroup, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';



class Page2 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Facebook *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsFacebook"
                type="text"
                name="facebook"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              LinkedIn *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsLinkedIn"
                type="text"
                name="LinkedIn"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Phone *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsPhone"
                type="text"
                name="phone"
                placeholder="8001234567"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              City *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsCity"
                type="text"
                name="city"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Country *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsCountry"
                type="text"
                name="country"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Employer *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsEmployer"
                type="text"
                name="employer"
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
        </div>
      )
    }
  }

export default Page2;
