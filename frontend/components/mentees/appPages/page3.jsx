import React from 'react';
import { Grid, Row, Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page3 extends React.Component {
    constructor(props) {
      super(props);
      this.gridStyle = 'col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
    }
    render() {
      return(
        <div>
          <h3 className='centerForm pageCaption'> Help us connect you with your ideal mentor</h3>
          <div className='green-spacer'></div>

          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                First Name *
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
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
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                Last Name *
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
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
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                Age *
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
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
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                Email *
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
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

export default Page3;
