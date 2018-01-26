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
          <FormGroup>
            <Col sm={2}></Col>
            <Col componentClass={ControlLabel} sm={8}>
              <h4 className='centerText formFontStyle2'>
                What's getting in the way of you having that dream bio?
                (Select up to 3)
              </h4>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}></Col>
            <Col sm={8}>
              <Select
                name="instagram_bio_why_not_text"
                value={this.props.page.instagram_bio_why_not_text}
                onChange={(value) => this.props.handleMultiChange(value, 'instagram_bio_why_not_text')}
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
            <Col sm={2}></Col>
            <Col componentClass={ControlLabel} sm={8}>
              <h4 className='centerText formFontStyle2'>
                What are you most excited to get from a mentor?
                (Select up to 3)
              </h4>

            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}></Col>
            <Col sm={8}>
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

export default Page6;