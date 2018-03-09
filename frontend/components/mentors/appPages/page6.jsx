import React from 'react';
import { Grid, Row, Col, Form, Button, Panel, InputGroup, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Select from 'react-select';


class Page6 extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
          <h2 className="pageCaption">Uniquely you</h2>
          <div className='green-spacer'></div>
          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={2} sm={8}>
              <h4 className='centerText formFontStyle2'>
                We all get in the way of our own success. Which of the following challenges do you think you’ve managed to control in order to unblock your road to success?
                (Select the top 3)
              </h4>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={8}>
              <Select
                name="unblock_methods"
                value={this.props.page.unblock_methods}
                onChange={(value) => this.props.handleMultiChange(value, 'unblock_methods')}
                multi
                delimiter="|"
                simpleValue
                joinValues
                options={[
                  { value: 'Procrastination', label: 'Procrastination' },
                  { value: 'Lack of Support', label: 'Lack of Support' },
                  { value: 'Indecision', label: 'Indecision' },
                  { value: 'Lack of Resources', label: 'Lack of Resources' },
                  { value: 'Unclear Goals', label: 'Unclear Goals' },
                  { value: 'Time Management', label: 'Time Management' },
                  { value: 'Lack of Confidence', label: 'Lack of Confidence' }
                ]}
              />
            </Col>
          </FormGroup>
          <FormGroup >
            <Col componentClass={ControlLabel} smOffset={2} sm={8}>
              <h4 className='centerText formFontStyle2'>
                What are you most excited to provide be for your mentee?
                (Select the top 3)
              </h4>
            </Col>
            <Col smOffset={2} sm={8}>
              <Select
                name="provide"
                value={this.props.page.provide}
                onChange={(value) => this.props.handleMultiChange(value, 'provide')}
                multi
                delimiter="|"
                simpleValue
                joinValues
                options={[
                  { value: 'Challenge', label: 'Challenge' },
                  { value: 'Accountability', label: 'Accountability' },
                  { value: 'A Listening Ear', label: 'A Listening Ear' },
                  { value: 'Provide focus and direction', label: 'Provide focus and direction' },
                  { value: 'Inspiration', label: 'Inspiration' },
                  { value: 'Ideas, Innovation, and Strategy for New Projects', label: 'Ideas, Innovation, and Strategy for New Projects' },
                  { value: 'Confidence booster; provide validation', label: 'Confidence booster; provide validation' }
                ]}
              />
            </Col>
          </FormGroup>
        </div>
      );
    }
  }

export default Page6;
