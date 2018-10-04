import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getAllPlayers } from '../reducer/playerReducer';
import { getOneRoom } from '../reducer/roomReducer';
import { getPlayersinRoom } from '../reducer/roomReducer';
// import { stylesWaiting } from '../styles/componentStyles';
import { stylesDefault } from '../styles/componentStyles';
import db from '../reducer/firebase';
let counter = 1;

class Waiting extends Component {
  _onPressButton() {}
  constructor() {
    super();
    this.state = {
      count: 1,
      players: '',
      allplayers: {},
    };
    // this.getPlayersinRoom = this.getPlayersinRoom.bind(this);
  }

  getPlayersinRoom() {
    let temp = [];
    const players = db
      .database()
      .ref('players')
      .orderByChild('roomId')
      .equalTo(this.props.navigation.getParam('roomId'))
      .on('value', function(snapshot) {
        temp.push(snapshot.val());
      });
    return temp;
  }

  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const roomId = this.props.navigation.getParam('roomId');
    let [objects] = this.getPlayersinRoom();
    let array = [];
    for (let player in objects) {
      array.push(objects[player]);
    }
    console.log(array);
    return (
      <View style={styles.container}>
        {array.map(player => (
          <Text style={styles.text} key={player.name}>
            {player.name}
          </Text>
        ))}
        )<Text>{roomId}</Text>
        {this.props && this.props.players.length ? (
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('DrawCanvas')}
            >
              <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
            {counter++}
          </View>
        ) : (
          <View style={styles.buttonGroup}>
            {array.map(player => (
              <Text style={styles.text} key={player.name}>
                {player.name}
              </Text>
            ))}
            <Text style={styles.test}>{this.props.roomId}</Text>
            {/* ))} */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Vote')}
            >
              <Text style={styles.buttonText}>Go To Vote</Text>
            </TouchableOpacity>
            {counter--}
          </View>
        )}
      </View>
    );
  }
}

// const styles = stylesWaiting;
const styles = stylesDefault;

const mapStateToProps = state => {
  return {
    players: state.players.players,
    roomSize: state.rooms.room.numPlayers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAll: () => dispatch(getAllPlayers()),
    // fetchPlayers: room => dispatch(getPlayersinRoom(room)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Waiting);
