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
        <Row className="videoHeader">
          <Col sm={2}></Col>
          <Col className='centerText formFontStyle2' sm={8}>
            Please submit a video on the following three prompts. Videos should be between 60 and 90 seconds.
            Provide the link in the field below.
             We’re excited to meet you, superstar!
          </Col>
        </Row>
        <Row className="videoListItem">
          <Col sm={2}></Col>
          <Col className='centerText formFontStyle' sm={8}>
            1. What keeps you up at night?
          </Col>
        </Row>
        <Row className="videoListItem">
          <Col sm={2}></Col>
          <Col className='centerText formFontStyle' sm={8}>
            2. Why do you think girls should support each other?
          </Col>
        </Row>
        <Row className="videoListItem">
          <Col sm={2}></Col>
          <Col className='centerText formFontStyle' sm={8}>
            3. What impact do you want to have in the world?
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

// class Page7 extends React.Component {
//     constructor(props) {
//       super(props);
//
//       // this.state = {
//       //   videoOptions: { mimeType: 'video/webm; codecs=vp9' },
//       //   mediaSteam: new MediaStream(),
//       //   mediaRecorder: new MediaRecord(mediaStream, options),
//       //   recordedChunks: [],
//       // }
//       // this.state.mediaRecorder.ondataavailable = handleDataAvailable;
//       let mediaSource = new MediaSource();
//       this.state = {
//         mediaSource: mediaSource,
//         mediaRecorder: null,
//       }
//       this.video = [];
//       this.button = [];
//       this.recordedBlobs = [];
//       this.state.mediaSource.addEventListener('sourceopen', this.handleSourceOpen, false);
//
//       this.handleSuccess = this.handleSuccess.bind(this);
//       this.handleError = this.handleError.bind(this);
//       this.handleSourceOpen = this.handleSourceOpen.bind(this);
//       this.handleDataAvailable = this.handleDataAvailable.bind(this);
//       this.toggleRecording = this.toggleRecording.bind(this);
//       this.stopRecording = this.stopRecording.bind(this);
//       this.startRecording = this.startRecording.bind(this);
//       this.handleStop = this.handleStop.bind(this);
//       this.play = this.play.bind(this);
//
//     }
//
//     componentDidMount(){
//       this.gumVideo = this.video[0];
//       this.recordedVideo = this.video[1];
//       console.log(this.recordedVideo);
//       this.recordButton = this.button[0];
//       this.playButton = this.button[1];
//       this.uploadButton = this.button[2];
//
//       this.isSecureOrigin = location.protocol === 'https:' ||
//       location.hostname === 'localhost';
//       this.constraints = {
//         audio: true,
//         video: true
//       };
//       // window.isSecureContext could be used for Chrome
//       if (!this.isSecureOrigin) {
//         alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
//         '\n\nChanging protocol to HTTPS');
//         location.protocol = 'HTTPS';
//       }
//
//       this.recordedVideo.addEventListener('error', function(ev) {
//         console.error('MediaRecording.recordedMedia.error()');
//         alert('Your browser can not play\n\n' + recordedVideo.src
//         + '\n\n media clip. event: ' + JSON.stringify(ev));
//       }, true);
//
//       navigator.mediaDevices.getUserMedia(this.constraints).
//       then(this.handleSuccess).catch(this.handleError);
//
//       this.recordButton.onclick = this.toggleRecording;
//       this.playButton.onclick = this.play;
//     }
//
//     handleSuccess(stream) {
//       this.recordButton.disabled = false;
//       console.log('getUserMedia() got stream: ', stream);
//       window.stream = stream;
//       this.gumVideo.srcObject = stream;
//     }
//
//     handleError(error) {
//       console.log('navigator.getUserMedia error: ', error);
//     }
//
//
//     handleSourceOpen(event) {
//       console.log('MediaSource opened');
//     }
//
//     handleDataAvailable(event) {
//       if (event.data && event.data.size > 0) {
//         this.recordedBlobs.push(event.data);
//       }
//     }
//
//     handleStop(event) {
//       console.log('Recorder stopped: ', event);
//     }
//
//     toggleRecording() {
//       if (this.recordButton.textContent === 'Start Recording') {
//         this.startRecording();
//       } else {
//         this.stopRecording();
//         this.recordButton.textContent = 'Start Recording';
//         this.playButton.disabled = false;
//         // uploadButton.disabled = false;
//       }
//     }
//
//     startRecording() {
//       this.recordedBlobs = [];
//       var options = {mimeType: 'video/webm;codecs=vp9'};
//       if (!MediaRecorder.isTypeSupported(options.mimeType)) {
//         console.log(options.mimeType + ' is not Supported');
//         options = {mimeType: 'video/webm;codecs=vp8'};
//         if (!MediaRecorder.isTypeSupported(options.mimeType)) {
//           console.log(options.mimeType + ' is not Supported');
//           options = {mimeType: 'video/webm'};
//           if (!MediaRecorder.isTypeSupported(options.mimeType)) {
//             console.log(options.mimeType + ' is not Supported');
//             options = {mimeType: ''};
//           }
//         }
//       }
//       try {
//         this.mediaRecorder = new MediaRecorder(window.stream, options);
//       } catch (e) {
//         console.error('Exception while creating MediaRecorder: ' + e);
//         alert('Exception while creating MediaRecorder: '
//           + e + '. mimeType: ' + options.mimeType);
//         return;
//       }
//       console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options);
//       this.recordButton.textContent = 'Stop Recording';
//       this.playButton.disabled = true;
//       this.uploadButton.disabled = true;
//       this.mediaRecorder.onstop = this.handleStop;
//       this.mediaRecorder.ondataavailable = this.handleDataAvailable;
//       this.mediaRecorder.start(10); // collect 10ms of data
//       console.log('MediaRecorder started', this.mediaRecorder);
//     }
//
//     stopRecording() {
//       this.mediaRecorder.stop();
//       console.log('Recorded Blobs: ', this.recordedBlobs);
//       this.recordedVideo.controls = true;
//     }
//
//     play() {
//       var superBuffer = new Blob(this.recordedBlobs, {type: 'video/webm'});
//       this.recordedVideo.src = window.URL.createObjectURL(superBuffer);
//       this.recordedVideo.play();
//     }
//
//     render() {
//       return(
//         <div>
//           <video ref={(input) => {this.video[0] = input}} id="gum" autoPlay muted></video>
//           <video ref={(input) => {this.video[1] = input}} id="recorded" controls></video>
//
//           <div>
//             <button ref={(input) => {this.button[0] = input}} id="record" disabled>Start Recording</button>
//             <button ref={(input) => {this.button[1] = input}} id="play" disabled>Play</button>
//             <button
//               ref={(input) => {this.button[2] = input}}
//               onClick={this.upload}
//               id="upload" disabled
//               >
//               Upload
//             </button>
//           </div>
//         </div>
// )
//     }
//   }
//
// export default Page7;

// <FormGroup>
//   <Col sm={8}>
//     <InputGroup>
//       <InputGroup.Addon>
//         <FontAwesome name='file-video-o'/>
//       </InputGroup.Addon>
//       <FormControl
//         id="formControlsVideo"
//         type="text"
//         name="videoURL"
//         value={this.props.page.videoURL}
//         onChange={this.props.handleInputChange}
//         />
//     </InputGroup>
//   </Col>
// </FormGroup>
