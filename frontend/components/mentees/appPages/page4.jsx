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
          <h3 className='centerForm pageCaption'>Let's get connected</h3>
          <div className='green-spacer'></div>

          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                Facebook
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
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
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                Phone
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
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
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                City
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
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
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                Country
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
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
