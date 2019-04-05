function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

const data = [
{ id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
{ id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
{ id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
{ id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
{ id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
{ id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
{ id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
{ id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
{ id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav' }];





class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeydown",












    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.displayInstrument(this.props.id);
      }
    });_defineProperty(this, "playSound",


    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.displayInstrument(this.props.id);
    });}componentDidMount() {console.log(this.audio);document.addEventListener('keydown', this.handleKeydown);window.focus();}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeydown);}

  render() {
    return (
      React.createElement("div", { className: "drum-pad", id: this.props.id, onClick: this.playSound },
      React.createElement("h1", null, this.props.letter),
      React.createElement("audio", { className: "clip",
        letter: this.props.letter,
        src: this.props.src,
        ref: ref => this.audio = ref })));




  }}



class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "displayInstrument",







    instrument => {
      this.setState({ display: instrument });
    });this.state = { display: "Press any Pad keys" };}




  render() {
    return (
      React.createElement("div", { id: "drum-machine-container" },
      React.createElement("h1", { id: "DM-header" }, "Drum Machine"),
      React.createElement("div", { id: "surface-pad" },


      React.createElement("div", { id: "display-pads" }, data.map((sound) =>
      React.createElement(DrumPad, {
        key: sound.id,
        id: sound.id,
        letter: sound.letter,
        src: sound.src,
        displayInstrument: this.displayInstrument }))),





      React.createElement("div", { id: "screen" },

      this.state.display))));







  }}



ReactDOM.render(React.createElement(App, null), document.getElementById("root"));