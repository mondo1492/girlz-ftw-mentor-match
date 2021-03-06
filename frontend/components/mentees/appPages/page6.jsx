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
          <h2 className="pageCaption">Looking Forward</h2>
          <div className='green-spacer'></div>

          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={2} sm={8}>
                <h4 className='formFontStyle2'>
                  Write the Instagram bio you wish you had.
                </h4>
            </Col>
            <Col smOffset={2} sm={8}>
                <textarea style={{ height: 35 }} id='formControlsTextarea' value={this.props.page.instagram_bio_text} className="form-control" id="instagram_bio_text" name="instagram_bio_text" onChange={this.props.handleInputChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={2} sm={8}>
              <h4 className='formFontStyle2'>
                What's getting in the way of you having that dream bio?
                (Select up to 3)
              </h4>
            </Col>
            <Col smOffset={2} sm={8}>
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
              <h4 className='formFontStyle2'>
                What are you most excited to get from a mentor?
                (Select up to 3)
              </h4>

            </Col>
          </FormGroup>
          <FormGroup>
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
