import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Page7 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Grid>
        <h2 className="pageCaption">We’re excited to meet you, superstar!</h2>
        <div className='green-spacer'></div>

        <Row className="videoHeader">
          <Col className='centerText formFontStyle2' sm={12}>
            Please submit a video on the following three prompts. Videos should be between 60 and 90 seconds.
          </Col>
        </Row>
        <Row className="videoListItem">
          <Col sm={2}></Col>
          <Col className='centerText formFontStyle' sm={10}>
            1. Share a little bit about yourself and your passions.
          </Col>
        </Row>
        <Row className="videoListItem">
          <Col sm={2}></Col>
          <Col className='centerText formFontStyle' sm={10}>
            2. Why do you want to be a GIRLZ, FTW mentor?
          </Col>
        </Row>
        <Row className="videoListItem">
          <Col sm={2}></Col>
          <Col className='centerText formFontStyle' sm={10}>
            3. How do you support others?
          </Col>
        </Row>
        <Row className="inputRow">
          <FormGroup>
            <Col sm={4} smOffset={4}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='file-video-o'/>
                </InputGroup.Addon>
                <FormControl
                  id="formControlsVideo"
                  type="text"
                  name="video_URL"
                  value={this.props.page.video_URL}
                  onChange={this.props.handleInputChange}
                  />
              </InputGroup>
            </Col>
          </FormGroup>
        </Row>
      </Grid>
    )
  }
}

export default Page7;
