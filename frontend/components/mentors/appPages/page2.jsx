import React from 'react';
import { Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';


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
                value={this.props.page.facebook}
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
                name="linkedin"
                value={this.props.page.linkedin}
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
                value={this.props.page.phone}
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
                value={this.props.page.city}
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
                value={this.props.page.country}
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
                value={this.props.page.employer}
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
        </div>
      )
    }
  }

export default Page2;
