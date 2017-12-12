import React from 'react';
import { Grid, Row, Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        gridStyle: 'col-lg-offset-8 col-lg-8 col-md-offset-8 col-md-8 col-sm-offset-8 col-sm-8',
        colLeftStyle: '',
        colRightStyle: '',
      }
    }
    render() {
      return(
        <div>
          <h3 className='centerForm'>Help us connect you with your ideal mentee.</h3>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                Username*
              </Col>
              <Col sm={8}>
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
              <Col componentClass={ControlLabel} sm={3}>
                  Password*
              </Col>
              <Col sm={8}>
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
              <Col componentClass={ControlLabel} sm={3}>
                  First Name*
              </Col>
              <Col sm={8}>
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
              <Col componentClass={ControlLabel} sm={3}>
                  Last Name*
              </Col>
              <Col sm={8}>
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
              <Col componentClass={ControlLabel} sm={3}>
                  Age*
              </Col>
              <Col sm={8}>
                <FormControl
                  id="formControlsAge"
                  type="number"
                  value={this.props.page.age}
                  name="age"
                  onChange={this.props.handleInputChange}
                  />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                  Email*
              </Col>
              <Col sm={8}>
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
              </Col>
            </FormGroup>
        </div>
      );
    }
  }

export default Page1;
