import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page2 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
          <div>
            <Grid>
              <Row>
                <Col sm={2}></Col>
                <Col className='centerText formFontStyle2' sm={8}>
                  What you should know before submitting your application:
                </Col>
              </Row>
              <Row>
                <Col sm={2}></Col>
                <Col className='centerText formFontStyle' sm={8}>
                  - 	All of our communication once you join the program happens on Facebook. If you’re accepted as a mentee, you will be added to a Facebook group. This group will be the place where you can connect with other mentors and mentees in the program. We’ll use this group to provide support, encouragement, and advice for each other. You must have a Facebook profile if you want to be a part of this program.
                </Col>
              </Row>
              <Row>
                <Col sm={2}></Col>
                <Col className='centerText formFontStyle' sm={8}>
                  -   Every month, we’ll host a call with all mentors and mentees. These calls take place on the first saturday of every month. In these calls, we’ll have inspiring women talk to about how they got to where they are today. Each call will be structured differently but is meant to inspire, inform, and mobilize everyone on the call. Attending these calls is mandatory. You can only miss up to 2 calls (with advanced notice).
                </Col>
              </Row>
              <Row>
                <Col sm={2}></Col>
                <Col className='centerText formFontStyle' sm={8}>
                  -   You must be willing to commit at least 4 hours a month for 6 months. Sessions with your mentor should last 1 hour every other week. We’ll also ask that you write 1 blog post a month about what you’ve learned from your mentor and/or what you’re working on. Lastly, you must allot 1 hour for the monthly virtual chats. 
                </Col>
              </Row>
            </Grid>
          </div>
      );
    }
  }

export default Page2;
