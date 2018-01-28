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
            <h3 className='pageCaption'>Before we begin</h3>
            <div className='green-spacer'></div>
            <Grid>
              <Row>
                <Col className='formFontStyle' smOffset={2} sm={8}>
                  <li>
                    You must be willing to commit at least 4 hours a month for 6 months. Sessions with your mentor should last 1 hour every other week. We’ll also ask that you write 1 blog post a month about what you’ve learned from your mentor and/or what you’re working on.
                  </li>
                </Col>
              </Row>
              <Row>
                <Col className='formFontStyle'
                  sm={8} smOffset={2}
                   >
                  <li>
                    As all of our communication during the program happens on Facebook, you must have a Facebook profile to join.
                  </li>
                </Col>
              </Row>
              <Row>
                <Col className='formFontStyle' smOffset={2} sm={8}>
                  <li>
                    We have mandatory, virtual chats with inspiring women on the first Saturday of every month.
                    You can only miss up to 2 calls (with advanced notice).
                  </li>
                </Col>
              </Row>
            </Grid>
          </div>
      );
    }
  }

export default Page2;
