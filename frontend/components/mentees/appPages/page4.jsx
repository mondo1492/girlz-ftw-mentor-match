import React from 'react';
import { Col, Form, Button, Panel, InputGroup, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';



class Page4 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div>
          <h3 className='centerForm pageCaption'>Let's get connected!</h3>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2} className='formFontStyle'>
              Facebook *
            </Col>
            <Col sm={8}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='facebook'/>
                </InputGroup.Addon>
              <FormControl
                id="formControlsFacebook"
                type="text"
                name="facebook"
                value={this.props.page.facebook}
                onChange={this.props.handleInputChange}
                />
            </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2} className='formFontStyle'>
              LinkedIn *
            </Col>
            <Col sm={8}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='linkedin'/>
                </InputGroup.Addon>
                <FormControl
                  id="formControlsLinkedIn"
                  type="text"
                  name="linkedin"
                  value={this.props.page.linkedin}
                  onChange={this.props.handleInputChange}
                  />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2} className='formFontStyle'>
              Phone *
            </Col>
            <Col sm={8}>
              <InputGroup>
               <InputGroup.Addon>
                 <FontAwesome name='phone'/>
               </InputGroup.Addon>
                <FormControl
                  id="formControlsPhone"
                  type="text"
                  name="phone"
                  value={this.props.page.phone}
                  placeholder="8001234567"
                  onChange={this.props.handleInputChange}
                  />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2} className='formFontStyle'>
              City *
            </Col>
            <Col sm={8}>
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
            <Col componentClass={ControlLabel} sm={2} className='formFontStyle'>
              Country *
            </Col>
            <Col sm={8}>
              <FormControl
                id="formControlsCountry"
                type="text"
                name="country"
                value={this.props.page.country}
                onChange={this.props.handleInputChange}
                />
            </Col>
          </FormGroup>
        </div>
      )
    }
  }

export default Page4;
