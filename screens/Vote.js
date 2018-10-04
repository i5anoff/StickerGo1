import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
//import { stylesContest } from '../styles/componentStyles';
import { stylesDefault } from '../styles/componentStyles';
import { connect } from 'react-redux';
import db from '../reducer/firebase';

export default class Contest extends Component {
  _onPressButton() {}
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  getPhotos() {
    let photos;
    db.database()
      .ref('players')
      .child(userId)
      .child('photo')
      .on('value', function(snapshot) {
        photos = snapshot.val();
      });
    return photos;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Winner')}
          >
            <Text style={styles.buttonText}>Submit vote</Text>
          </TouchableOpacity>
        </View>
        ) }
      </View>
    );
  }
}

//const styles = stylesContest;
const styles = stylesDefault;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20,
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });