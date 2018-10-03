import Expo from 'expo';
import * as ExpoPixi from 'expo-pixi';
import React, { Component } from 'react';
import {
  Image,
  Button,
  Platform,
  AppState,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import db from '../reducer/firebase';
import { getAllPrompts, getOnePrompt } from '../reducer/promptReducer';
import { connect } from 'react-redux';
import { stylesHome } from '../styles/componentStyles';

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

class App extends Component {
  state = {
    image: null,
    // strokeColor: Math.random() * 0xffffff,
    // strokeWidth: Math.random() * 30 + 10,
    strokeColor: 0x00bfff,
    strokeWidth: 20,
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

  saveImage() {
    const draw = this.state.image;

    db.database()
      .ref('players')
      .child(`/${this.props.navigation.getParam('userId')}/draw`)
      .set(draw.uri);
  }

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
    this.props.getOnePrompt();

    AppState.addEventListener('change', this.handleAppStateChangeAsync);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChangeAsync);
  }

  // onChangeAsync = async () => {
  //   const { uri } = await this.sketch.takeSnapshotAsync();

  //   this.setState({
  //     image: { uri },
  //     strokeWidth: Math.random() * 30 + 10,
  //     strokeColor: Math.random() * 0xffffff,
  //   });
  // };
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

  onReady = () => {
    console.log('ready!');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.sketchContainer}>
            <Text style={styles.text}>
              Challenge: {this.props.prompts.prompt}
            </Text>
            <View style={styles.label}>
              <Text style={styles.text}>Draw Below</Text>
              {/* <Text>{this.props.navigation.getParam('userId')}</Text> */}
            </View>
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
        <View style={styles.buttonContainer}>
          <View style={styles.undoButton}>
            <Button
              color={'white'}
              title="undo"
              onPress={() => {
                this.sketch.undo();
              }}
            />
          </View>
          <View style={styles.saveButton}>
            <Button
              color="white"
              title="save"
              style={styles.button}
              onPress={() => {
                this.saveImage();
                const id = this.props.navigation.getParam('userId');
                console.log('id in home screen', id);
                console.log(
                  'in the homescreen, id is ',
                  this.props.navigation.getParam('userId')
                );
                this.props.navigation.navigate('Links', {
                  userId: id,
                });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = stylesHome;

const mapStateToProps = state => {
  return {
    prompts: state.prompts,
    prompt: state.prompt,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPrompts: () => dispatch(getAllPrompts()),
    getOnePrompt: () => dispatch(getOnePrompt()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
