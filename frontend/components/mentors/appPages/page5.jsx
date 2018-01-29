import React from 'react';
import { Grid, Row, Col, Form, Radio, Button, Panel, InputGroup, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Select from 'react-select';


class Page5 extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
          <h3 className='centerForm pageCaption'>Some background questions</h3>
          <div className='green-spacer'></div>

          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                College
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='graduation-cap'/>
                </InputGroup.Addon>
                <FormControl
                  id="formControlsCollege"
                  type="text"
                  name="college"
                  value={this.props.page.college}
                  onChange={this.props.handleInputChange}
                  />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={4} sm={4} className='formFontStyle'>
              What was your college major?
            </Col>
            <Col smOffset={4} sm={4}>
              <Select
                name="major"
                value={this.props.page.major}
                onChange={(value) => this.props.handleMultiChange(value, 'major')}
                multi
                delimiter="|"
                simpleValue
                joinValues
                options={[
                  { value: 'Science', label: 'Science' },
                  { value: 'Engineering', label: 'Engineering' },
                  { value: 'Communcations, Marketing', label: 'Communcations, Marketing' },
                  { value: 'Political Science, International Relations', label: 'Political Science, International Relations' },
                  { value: 'Finance, Economics', label: 'Finance, Economics' },
                  { value: 'Humanites', label: 'Humanites' },
                  { value: 'Arts', label: 'Arts' }
                ]}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col className='centerForm formFontStyle2' componentClass={ControlLabel} sm={12}>
              How important is it to you that a mentee share your major?
            </Col>

            <Col className='centerForm' sm={12}>
              <div className='formFontStyle'>
                <Radio
                  onChange={this.props.handleInputChange}
                  name="share_major_rank"
                  value='0'
                  checked={this.props.page.share_major_rank === '0'}
                  inline
                  >
                  Not at all
                </Radio>
                <Radio
                  onChange={this.props.handleInputChange}
                  name="share_major_rank"
                  value='1'
                  checked={this.props.page.share_major_rank === '1'}
                  inline
                  >
                  A little
                </Radio>
                <Radio
                  onChange={this.props.handleInputChange}
                  name="share_major_rank"
                  value='2'
                  checked={this.props.page.share_major_rank === '2'}
                  inline
                  >
                  Moderately
                </Radio>
                <Radio
                  onChange={this.props.handleInputChange}
                  name="share_major_rank"
                  value='3'
                  checked={this.props.page.share_major_rank === '3'}
                  inline
                  >
                  Very
                </Radio>
              </div>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={4} sm={8}>
              <h4 className='formFontStyle2'>
                Employer
              </h4>
            </Col>
            <Col smOffset={4} sm={4}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='handshake-o'/>
                </InputGroup.Addon>
                <FormControl
                  id="formControlsEmployer"
                  type="text"
                  name="employer"
                  value={this.props.page.employer}
                  onChange={this.props.handleInputChange}
                  />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={4} sm={8} className='formFontStyle'>
              In which industry do you to work?
            </Col>
            <Col smOffset={4} sm={4}>
              <Select
                name="industry"
                value={this.props.page.industry}
                onChange={(value) => this.props.handleMultiChange(value, 'industry')}
                multi
                delimiter="|"
                simpleValue
                joinValues
                options={[
                  { value: 'International Relations, Politics', label: 'International Relations, Politics' },
                  { value: 'Finance', label: 'Finance' },
                  { value: 'Accounting, Legal', label: 'Accounting, Legal' },
                  { value: 'Media', label: 'Media' },
                  { value: 'Technology', label: 'Technology' },
                  { value: 'Marketing', label: 'Marketing' },
                  { value: 'Performing Arts, Sports, Related', label: 'Performing Arts, Sports, Related' },
                  { value: 'Healthcare', label: 'Healthcare' },
                  { value: 'Education', label: 'Education' },
                  { value: 'Agriculture, Forestry', label: 'Agriculture, Forestry' },
                  { value: 'Service, Hospitality', label: 'Service, Hospitality' },
                  { value: 'Law Enforcement', label: 'Law Enforcement' }
                ]}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} smOffset={4} sm={8} className='formFontStyle'>
              Describe your job.
            </Col>
            <Col smOffset={4} sm={4}>
              <textarea style={{ height: 100 }} id='formControlsTextarea' value={this.props.page.job_description} className="form-control" id="job_description" name="job_description" onChange={this.props.handleInputChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col className='centerForm formFontStyle2' componentClass={ControlLabel} sm={12}>
                How important is it to you that a mentee would want to join your industry?
            </Col>
          </FormGroup>

          <FormGroup className='centerForm' sm={12}>
            <div className='formFontStyle'>
            <Radio
              onChange={this.props.handleInputChange}
              name="share_industry_rank"
              value='0'
              checked={this.props.page.share_industry_rank === '0'}
              inline
              >
              Not at all
            </Radio>
            <Radio
              onChange={this.props.handleInputChange}
              name="share_industry_rank"
              value='1'
              checked={this.props.page.share_industry_rank === '1'}
              inline
              >
              A little
            </Radio>
            <Radio
              onChange={this.props.handleInputChange}
              name="share_industry_rank"
              value='2'
              checked={this.props.page.share_industry_rank === '2'}
              inline
              >
              Moderately
            </Radio>
            <Radio
              onChange={this.props.handleInputChange}
              name="share_industry_rank"
              value='3'
              checked={this.props.page.share_industry_rank === '3'}
              inline
              >
              Very
            </Radio>
            </div>
          </FormGroup>
        </div>
      )
    }
  }

export default Page5;
