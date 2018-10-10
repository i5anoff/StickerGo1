import { StyleSheet } from 'react-native';

export const stylesDefault = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40E0D0',
  },
  linearGradientstyleHome: {
    padding: 20,
    paddingHorizontal: '40%',
    alignItems: 'stretch',
  },
  linearGradientstyle: {
    padding: 20,
    alignItems: 'stretch',
  },
  linearGradientstyleDraw: {
    padding: 20,
    alignItems: 'stretch',
    paddingHorizontal: '40%',
  },
  linearGradientstyleRoomCode: {
    padding: 20,
    alignItems: 'stretch',
    paddingHorizontal: '40%',
  },
  nonButtonContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    //for testing
    // backgroundColor: 'yellow',
  },

  nonButtonContainerCreate: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    //for testing
    // backgroundColor: 'yellow',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 25,

    //for testing
    // backgroundColor: 'black',
  },
  canvasButtonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // margin: 10,

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
    marginTop: 20,

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
  loadingImage: {
    height: 300,
    width: 300,
    alignItems: 'stretch',
    alignSelf: 'center',
  },
  button: {
    height: '80%',
    width: '40%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  seeWinnerButton: {
    height: '30%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'lightpink',
    borderWidth: 3,
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  beginButton: {
    height: '40%',
    width: '40%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  captureButton: {
    height: '80%',
    width: '40%',
    backgroundColor: '#40E0D0',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  captureButtonText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'MarkerFelt-Wide',
    color: 'white',
    fontSize: 18,
  },
  buttonTextHome: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'MarkerFelt-Wide',
    color: 'lightpink',
    fontSize: 30,
  },
  buttonText: {
    flex: 2,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'MarkerFelt-Wide',
    color: 'white',
    fontSize: 18,
  },
  joinOrCreateRoomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
  },
  textCreateName: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 40,
    color: 'white',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 35,
    color: 'white',
  },
  textWinner: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 35,
    color: 'white',
    marginTop: 45,
    marginBottom: 20,
  },
  winnerText: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'MarkerFelt-Wide',
    fontSize: 30,
    color: 'white',
  },
  nameText: {
    paddingTop: 20,
    // flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 35,
    color: 'white',
  },
  waitingText: {
    // flex: 2,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 25,
    color: 'white',
  },
  textEnter: {
    marginVertical: '5%',
    padding: 10,
    borderColor: '#40E0D0',
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 40,
    textAlign: 'center',
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
    marginBottom: '30%',
  },
  voteButton: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 30,
    borderWidth: 1,
    borderColor: 'cadetblue',
    marginBottom: '20%',
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10%',
  },
  twoPickers: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#40E0D0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },
  twoPickerItems: {
    height: '90%',
    width: '100%',
    fontWeight: 'bold',
    color: 'cadetblue',
    backgroundColor: 'white',
    borderColor: '#40E0D0',
    fontSize: 40,
  },
  codeText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 40,
    color: 'cadetblue',
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
    width: 300,
    height: 300,
  },
  sketchContainer: {
    flex: 5,
    borderColor: 'lightpink',
    borderWidth: 3,
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
    backgroundColor: '#CD5C5C',
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
  scrollContainer: {
    flex: 6,
    marginTop: '20%',
  },
  scrollContainerVote: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  scrollView: {
    flexGrow: 5,
  },
  nonScrollView: {
    flexGrow: 5,
  },
  buttonContainerVote: {
    position: 'absolute',
    flexDirection: 'row',
    height: '10%',
  },
  challengeText: {
    flex: 0.5,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 20,
    color: 'white',
    // flexWrap: 'wrap',
  },
  challenge: {
    flex: 0.5,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 40,
    color: 'white',
    // flexWrap: 'wrap',
    paddingBottom: '5%',
  },
  timerRed: {
    color: '#CD5C5C',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    //for testing
    // backgroundColor: 'yellow',
  },
  timer: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    //for testing
    // backgroundColor: 'yellow',
  },
  list: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  selectedImageStyle: {
    width: 300,
    height: 300,
    margin: 10,
    padding: 30,
    alignSelf: 'center',
    borderColor: '#40E0D0',
    borderWidth: 10,
  },
  unselectedImageStyle: {
    width: 300,
    height: 300,
    margin: 10,
    padding: 30,
    alignSelf: 'center',
  },
  nonButtonContainerCode: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    //for testing
    // backgroundColor: 'yellow',
  },
  buttonContainerCode: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '10%',
    //for testing
    // backgroundColor: 'black',
  },
  startButtonCode: {
    backgroundColor: 'white',
    height: '40%',
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    margin: 30,
    borderWidth: 1,
    borderColor: 'cadetblue',
    marginBottom: '20%',
  },
});
