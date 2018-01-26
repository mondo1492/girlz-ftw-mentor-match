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
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2} className='formFontStyle'>
              High School *
            </Col>
            <Col sm={8}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='graduation-cap'/>
                </InputGroup.Addon>
                <FormControl
                  id="formControlsHighSchool"
                  type="text"
                  name="high_school"
                  value={this.props.page.high_school}
                  onChange={this.props.handleInputChange}
                  />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2} className='formFontStyle'>
              College (if applicable)
            </Col>
            <Col sm={8}>
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
            <Col componentClass={ControlLabel} sm={2} className='formFontStyle'>
              What is/might be your college major? *
            </Col>
            <Col sm={8}>
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
                  { value: 'Liberal Arts', label: 'Liberal Arts' }
                ]}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2} className='formFontStyle'>
              In which industry do you want to work? *
            </Col>
            <Col sm={8}>
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
                  { value: 'Agriculture, Forestry, Fishing', label: 'Agriculture, Forestry, Fishing' }
                ]}
              />
            </Col>
          </FormGroup>

          <FormGroup >
            <Col className='centerForm formFontStyle2' componentClass={ControlLabel} sm={12}>
              How important is it to you that a mentor share your (desired) college major? *
            </Col>
          </FormGroup>

          <FormGroup>
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
                <Radio
                  onChange={this.props.handleInputChange}
                  name="share_major_rank"
                  value='4'
                  checked={this.props.page.share_major_rank === '4'}
                  inline
                  >
                  Extremely
                </Radio>
                </div>
            </Col>
          </FormGroup>

          <FormGroup >
            <Col className='centerForm formFontStyle2' componentClass={ControlLabel} sm={12}>
                How important is it to you that a mentor be employed in your desired industry? *
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
              <Radio
                onChange={this.props.handleInputChange}
                name="share_industry_rank"
                value='4'
                checked={this.props.page.share_industry_rank === '4'}
                inline
                >
                Extremely
              </Radio>
            </div>
          </FormGroup>
        </div>
      )
    }
  }

export default Page5;
