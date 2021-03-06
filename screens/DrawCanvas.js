import Expo, { LinearGradient } from 'expo';
import * as ExpoPixi from 'expo-pixi';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Platform,
  AppState,
  Text,
  View,
  Alert,
  Dimensions,
} from 'react-native';
import { getOnePrompt } from '../reducer/promptReducer';
import { addDrawing } from '../reducer/playerReducer';
import { connect } from 'react-redux';
import Timer from './Timer';
import { stylesDefault } from '../styles/componentStyles';
import { ColorWheel } from 'react-native-color-wheel';
var colorsys = require('colorsys');

console.disableYellowBox = true;

const isAndroid = Platform.OS === 'android';
function uuidv4() {
  //https://stackoverflow.com/a/2117523/4047926
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class Home extends Component {
  state = {
    image: null,
    strokeColor: 'black',
    strokeWidth: 15,
    lines: [
      {
        points: [
          { x: 300, y: 300 },
          { x: 600, y: 300 },
          { x: 450, y: 600 },
          { x: 300, y: 300 },
        ],
        color: 0xff00ff,
        alpha: 1,
        width: 10,
      },
    ],
    appState: AppState.currentState,
  };

  saveImage = async () => {
    const draw = this.state.image;
    await this.props.saveDrawing(draw, this.props.player.id);
  };

  handleAppStateChangeAsync = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      if (isAndroid && this.sketch) {
        this.setState({
          appState: nextAppState,
          id: uuidv4(),
          lines: this.sketch.lines,
        });
        return;
      }
    }
    this.setState({ appState: nextAppState });
  };

  componentDidMount() {
    this.props.getOnePrompt(this.props.player.roomId);
    AppState.addEventListener('change', this.handleAppStateChangeAsync);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChangeAsync);
  }

  onChangeAsync = async ({ width, height }) => {
    const options = {
      format: 'png', /// PNG because the view has a clear background
      quality: 0.1, /// Low quality works because it's just a line
      result: 'file',
      height,
      width,
    };
    /// Using 'Expo.takeSnapShotAsync', and our view 'this.sketch' we can get a uri of the image
    const uri = await Expo.takeSnapshotAsync(this.sketch, options);
    this.setState({
      image: { uri },
      // strokeWidth: Math.random() * 30 + 10,
      // strokeColor: Math.random() * 0xffffff,
    });
  };

  onReady = async ({ width, height }) => {
    const options = {
      format: 'png', /// PNG because the view has a clear background
      quality: 0.1, /// Low quality works because it's just a line
      result: 'file',
      height,
      width,
    };
    /// Using 'Expo.takeSnapShotAsync', and our view 'this.sketch' we can get a uri of the image
    const uri = await Expo.takeSnapshotAsync(this.sketch, options);
    this.setState({
      image: { uri },
      // strokeWidth: Math.random() * 30 + 10,
      // strokeColor: Math.random() * 0xffffff,
    });
  };

  findColor(color) {
    const hex = colorsys.hsvToHex(
      Math.round(color.h),
      Math.round(color.s),
      Math.round(color.v)
    );
    return hex;
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#192f6a', 'cadetblue', 'lightpink']}
          style={styles.linearGradientstyleDraw}
        >
          <View style={styles.nonButtonContainerDraw}>
            <View style={styles.textContainer}>
              <Text numberOfLines={2} style={styles.challengeText}>
                Your Challenge: {this.props.prompt}
              </Text>
            </View>
            <View style={styles.sketchContainer}>
              <ExpoPixi.Sketch
                ref={ref => (this.sketch = ref)}
                style={styles.sketch}
                strokeColor={this.state.strokeColor}
                strokeWidth={this.state.strokeWidth}
                strokeAlpha={1}
                onChange={this.onChangeAsync}
                onReady={this.onReady}
              />
            </View>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          >
            <ColorWheel
              initialColor="#000000"
              onColorChange={color => {
                const colorFound = this.findColor(color).split('#')[1];
                const strokeColor = '0x' + colorFound;
                this.setState({ strokeColor });
              }}
              style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
              }}
              thumbStyle={{ height: 5, width: 5, borderRadius: 30 }}
            />
          </View>
          <Timer
            navigation={this.props.navigation}
            navigateTo="CameraView"
            screenshot={this.saveImage}
          />
          <View style={styles.canvasButtonContainer}>
            <TouchableOpacity
              style={styles.undoButton}
              onPress={() => {
                this.sketch.undo();
              }}
            >
              <Text style={styles.buttonText}>undo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                if (this.state.image === null) {
                  return Alert.alert(
                    `No ${this.props.prompt}?`,
                    'Need your beyootiful drawing ;)',
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false }
                  );
                }
                this.saveImage();
                //const id = this.props.player.id;
                //this.props.navigation.navigate('CameraView');
              }}
            >
              <Text style={styles.buttonText}>DONE</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = stylesDefault;

const mapStateToProps = state => {
  return {
    player: state.players.player,
    prompt: state.prompts.prompt,
    roomId: state.rooms.room.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOnePrompt: roomId => dispatch(getOnePrompt(roomId)),
    saveDrawing: (drawing, playerId) => dispatch(addDrawing(drawing, playerId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
