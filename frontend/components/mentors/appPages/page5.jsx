import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page5 extends React.Component {
    constructor(props) {
      super(props);

      // this.state = {
      //   videoOptions: { mimeType: 'video/webm; codecs=vp9' },
      //   mediaSteam: new MediaStream(),
      //   mediaRecorder: new MediaRecord(mediaStream, options),
      //   recordedChunks: [],
      // }
      // this.state.mediaRecorder.ondataavailable = handleDataAvailable;
      let mediaSource = new MediaSource();
      this.state = {
        mediaSource: mediaSource,
        mediaRecorder: null,
      }
      this.video = [];
      this.button = [];
      this.recordedBlobs = [];
      this.state.mediaSource.addEventListener('sourceopen', this.handleSourceOpen, false);

      this.handleSuccess = this.handleSuccess.bind(this);
      this.handleError = this.handleError.bind(this);
      this.handleSourceOpen = this.handleSourceOpen.bind(this);
      this.handleDataAvailable = this.handleDataAvailable.bind(this);
      this.toggleRecording = this.toggleRecording.bind(this);
      this.stopRecording = this.stopRecording.bind(this);
      this.startRecording = this.startRecording.bind(this);
      this.handleStop = this.handleStop.bind(this);
      this.play = this.play.bind(this);

    }

    componentDidMount(){
      this.gumVideo = this.video[0];
      this.recordedVideo = this.video[1];
      console.log(this.recordedVideo);
      this.recordButton = this.button[0];
      this.playButton = this.button[1];
      this.uploadButton = this.button[2];

      this.isSecureOrigin = location.protocol === 'https:' ||
      location.hostname === 'localhost';
      this.constraints = {
        audio: true,
        video: true
      };
      // window.isSecureContext could be used for Chrome
      if (!this.isSecureOrigin) {
        alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
        '\n\nChanging protocol to HTTPS');
        location.protocol = 'HTTPS';
      }

      this.recordedVideo.addEventListener('error', function(ev) {
        console.error('MediaRecording.recordedMedia.error()');
        alert('Your browser can not play\n\n' + recordedVideo.src
        + '\n\n media clip. event: ' + JSON.stringify(ev));
      }, true);

      navigator.mediaDevices.getUserMedia(this.constraints).
      then(this.handleSuccess).catch(this.handleError);

      this.recordButton.onclick = this.toggleRecording;
      this.playButton.onclick = this.play;
    }

    handleSuccess(stream) {
      this.recordButton.disabled = false;
      console.log('getUserMedia() got stream: ', stream);
      window.stream = stream;
      this.gumVideo.srcObject = stream;
    }

    handleError(error) {
      console.log('navigator.getUserMedia error: ', error);
    }


    handleSourceOpen(event) {
      console.log('MediaSource opened');
    }

    handleDataAvailable(event) {
      if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data);
      }
    }

    handleStop(event) {
      console.log('Recorder stopped: ', event);
    }

    toggleRecording() {
      if (this.recordButton.textContent === 'Start Recording') {
        this.startRecording();
      } else {
        this.stopRecording();
        this.recordButton.textContent = 'Start Recording';
        this.playButton.disabled = false;
        // uploadButton.disabled = false;
      }
    }

    startRecording() {
      this.recordedBlobs = [];
      var options = {mimeType: 'video/webm;codecs=vp9'};
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + ' is not Supported');
        options = {mimeType: 'video/webm;codecs=vp8'};
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.log(options.mimeType + ' is not Supported');
          options = {mimeType: 'video/webm'};
          if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(options.mimeType + ' is not Supported');
            options = {mimeType: ''};
          }
        }
      }
      try {
        this.mediaRecorder = new MediaRecorder(window.stream, options);
      } catch (e) {
        console.error('Exception while creating MediaRecorder: ' + e);
        alert('Exception while creating MediaRecorder: '
          + e + '. mimeType: ' + options.mimeType);
        return;
      }
      console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options);
      this.recordButton.textContent = 'Stop Recording';
      this.playButton.disabled = true;
      this.uploadButton.disabled = true;
      this.mediaRecorder.onstop = this.handleStop;
      this.mediaRecorder.ondataavailable = this.handleDataAvailable;
      this.mediaRecorder.start(10); // collect 10ms of data
      console.log('MediaRecorder started', this.mediaRecorder);
    }

    stopRecording() {
      this.mediaRecorder.stop();
      console.log('Recorded Blobs: ', this.recordedBlobs);
      this.recordedVideo.controls = true;
    }

    play() {
      var superBuffer = new Blob(this.recordedBlobs, {type: 'video/webm'});
      this.recordedVideo.src = window.URL.createObjectURL(superBuffer);
      // workaround for non-seekable video taken from
      // https://bugs.chromium.org/p/chromium/issues/detail?id=642012#c23
      this.recordedVideo.addEventListener('loadedmetadata', () => {
        if (this.recordedVideo.duration === Infinity) {
          this.recordedVideo.currentTime = 1e101;
          this.recordedVideo.ontimeupdate = () => {
            this.recordedVideo.currentTime = 0;
            this.recordedVideo.ontimeupdate = () => {
              delete this.recordedVideo.ontimeupdate;
              this.recordedVideo.play();
            };
          };
        }
      });
    }

    render() {
      return(
        <div>
          <video ref={(input) => {this.video[0] = input}} id="gum" autoPlay muted></video>
          <video ref={(input) => {this.video[1] = input}} id="recorded" controls></video>

          <div>
            <button ref={(input) => {this.button[0] = input}} id="record" disabled>Start Recording</button>
            <button ref={(input) => {this.button[1] = input}} id="play" disabled>Play</button>
            <button
              ref={(input) => {this.button[2] = input}}
              onClick={this.upload}
              id="upload" disabled
              >
              Upload to Youtube
            </button>
          </div>
        </div>
)
    }
  }

export default Page5;
