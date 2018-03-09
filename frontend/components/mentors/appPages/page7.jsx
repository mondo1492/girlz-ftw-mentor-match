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
            Please submit a <strong>video</strong> or an <strong>essay</strong> on the following three prompts.
            If you decide to do a video, it should be between 60 and 90 seconds.
          </Col>
        </Row>
        <Row className="videoListItem">
          <Col className='centerText formFontStyle' smOffset={1} sm={10}>
            1. Share a little bit about yourself and your passions.
          </Col>
        </Row>
        <Row className="videoListItem">
          <Col className='centerText formFontStyle' smOffset={1} sm={10}>
            2. Why do you want to be a GIRLZ, FTW mentor?
          </Col>
        </Row>
        <Row className="videoListItem">
          <Col className='centerText formFontStyle' smOffset={1} sm={10}>
            3. How do you support others?
          </Col>
        </Row>
        <Row>
          <Col smOffset={1} sm={10}>
            <textarea
              style={{ height: 300 }} id='formControlsTextarea'
              value={this.props.page.video_URL}
              className="form-control" id="video_URL" name="video_URL"
              onChange={this.props.handleInputChange}
              placeholder="Include a youtube, vimeo, google drive, etc. link or write your answers to the questions."
              />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Page7;
