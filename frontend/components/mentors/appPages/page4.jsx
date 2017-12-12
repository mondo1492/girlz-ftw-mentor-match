import React from 'react';
import { Grid, Row, Col, Form, Button, Panel, InputGroup, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Select from 'react-select';


class Page4 extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={12}>
              <h4 className='centerText'>
                We all get in the way of our own success.
                Which of the following methods do you think you’ve managed
                to get under control in order to unblock your road to success?
                (Select the top 3)
              </h4>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
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
                  { value: 'Controlling life, people', label: 'Controlling life, people' },
                  { value: 'Indecision', label: 'Indecision' },
                  { value: 'Not saying \'yes\'; holding back; not being proactive in seeing opportunities', label: 'Not saying \'yes\'; holding back; not being proactive in seeing opportunities' },
                  { value: 'Wanting to be right', label: 'Wanting to be right' },
                  { value: 'Following the goals of other people', label: 'Following the goals of other people' },
                  { value: 'Acting as \'lone ranger\'; not delegating', label: 'Acting as \'lone ranger\'; not delegating' },
                  { value: 'Not saying \'no\' to projects that don\'t inspire you', label: 'Not saying \'no\' to projects that don\'t inspire you' },
                ]}
              />
            </Col>
          </FormGroup>
          <FormGroup >
            <Col componentClass={ControlLabel} sm={12}>
              <h4 className='centerText'>
                What are you most excited to provide be for your mentee?
                (Select the top 3)
              </h4>

            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
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
                  { value: 'Sounding Board', label: 'Sounding Board' },
                  { value: 'Provide focus and direction', label: 'Provide focus and direction' },
                  { value: 'Inspiration', label: 'Inspiration' },
                  { value: 'Ideas, Innovation, and Strategy for new projects', label: 'Ideas, Innovation, and Strategy for new projects' },
                  { value: 'Confidence booster; provide validation', label: 'Confidence booster; provide validation' },
                  { value: 'Not saying \'no\' to projects that don\'t inspire you', label: 'Not saying \'no\' to projects that don\'t inspire you' },
                ]}
              />
            </Col>
          </FormGroup>
        </div>
      );
    }
  }

export default Page4;
