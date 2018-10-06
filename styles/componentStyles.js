import { StyleSheet } from 'react-native';

export const stylesDefault = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradientstyle: {
    padding: 20,
    alignItems: 'stretch',
  },
  nonButtonContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    //for testing
    // backgroundColor: 'yellow',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    //for testing
    // backgroundColor: 'black',
  },
  heading: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'MarkerFelt-Wide',
    fontSize: 70,
    color: 'white',
    //for testing
    // backgroundColor: 'blue',
  },
  image: {
    flex: 2,
    height: 300,
    width: 300,
    alignItems: 'stretch',
    //for testing
    // backgroundColor: 'red',
  },
  button: {
    height: '80%',
    width: '40%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  buttonText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'MarkerFelt-Wide',
    color: 'lightpink',
    fontSize: 18,
  },
  joinOrCreateRoomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 40,
    color: 'white',
    //for testing
    // backgroundColor: 'green',
  },
  textEnter: {
    flex: 1,
    height: '100%',
    width: '80%',
    margin: 15,
    padding: 20,
    borderColor: '#40E0D0',
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 25,
  },
  startButtonText: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'MarkerFelt-Wide',
    color: 'lightpink',
    fontSize: 50,
  },
  startButton: {
    backgroundColor: 'white',
    height: '60%',
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 30,
    borderWidth: 1,
    borderColor: 'cadetblue',
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  twoPickers: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderColor: '#40E0D0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  twoPickerItems: {
    height: '90%',
    width: '90%',
    fontWeight: 'bold',
    color: 'cadetblue',
    backgroundColor: 'white',
    borderColor: '#40E0D0',
    fontSize: 40,
  },
  codeText: {
    flex: 1,
    alignText: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 40,
    color: 'cadetblue',
    //for testing
    // backgroundColor: 'green',
  },
  textBkg: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#40E0D0',
    borderWidth: 2,
  },
  sketch: {
    flex: 4,
    width: 300,
    height: 300,
  },
  sketchContainer: {
    flex: 4,
    borderColor: 'lightpink',
    borderWidth: 10,
    backgroundColor: 'white',
  },
  undoButton: {
    justifyContent: 'center',
    padding: 10,
    height: 50,
    width: 120,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#CD5C5C',
  },
  saveButton: {
    justifyContent: 'center',
    padding: 10,
    height: 50,
    width: 120,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#40E0D0',
  },
  tinyButton: {
    height: '80%',
    width: '20%',
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  tinyButtonText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'MarkerFelt-Wide',
    color: 'lightpink',
    fontSize: 14,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});
