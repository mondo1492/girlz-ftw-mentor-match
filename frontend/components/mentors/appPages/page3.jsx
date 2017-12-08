import React from 'react';
import { Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';


class Page3 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div>

          <FormGroup>
            <ControlLabel>
              What was your college major? *
            </ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              id="formControlsMajor"
              name="major"
              onChange={this.handleInputChange}
            >
              <option value="Science">Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Communications, Marketing">Communications, Marketing</option>
              <option value="Political Science, International Relations">Political Science, International Relations</option>
              <option value="Finance, Economics">Finance, Economics</option>
              <option value="Arts">Arts</option>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>
              In which industry do you work? *
            </ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              id="formControlsIndustry"
              name="industry"
              onChange={this.handleInputChange}
            >
              <option value="International Relations, Politics">International Relations, Politics</option>
              <option value="Finance">Finance</option>
              <option value="Accounting, Legal">Accounting, Legal</option>
              <option value="Media">Media</option>
              <option value="Technology">Technology</option>
              <option value="Marketing">Marketing</option>
              <option value="Performing Arts, Sports, Related Industries">Performing Arts, Sports, Related Industries</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </FormControl>
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
        </div>
      )
    }
  }

export default Page3;