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
                    The program is six months long. The first three months you'll have bi-weekly calls with your mentee (once every other week). The last three months you'll have monthly calls.
                  </li>
                </Col>
              </Row>
              <Row>
                <Col className='formFontStyle' smOffset={2} sm={8}>
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
              <Row>
                <Col className='formFontStyle' smOffset={2} sm={8}>
                  <li>
                    {"In the next page you'll be asked to create a username and password. You'll need this info to log back into our portal and choose your mentee if you're accepted."}
                  </li>
                </Col>
              </Row>
            </Grid>
          </div>
      );
    }
  }

export default Page2;
