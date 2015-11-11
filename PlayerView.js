'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    alignItems: 'center',
    backgroundColor: '#222222'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#CD1041'
  },
  profile: {
    fontSize: 20,
    margin: 5,
    color: 'black',
  },
  infoContainer: {
    textAlign: 'left'
  }
});

class PlayerView extends Component {

  render() {
    var player = this.props.player;
    console.log("hi" + player.player);

    return (
      <View>
        <View style = { styles.container} >
          <Text style = { styles.heading }>
            { player.player }
          </Text>
        </View>
        <View style = { styles.infoContainer } >
          <Text style = { styles.profile }>
            Position: { player.pos }
          </Text>
          <Text style = { styles.profile }>
            Age:  { player.age }
          </Text>
          <Text style = { styles.profile }>
            Season: { player.season }
          </Text>
          <Text style = { styles.profile }>
            Total Pts:  { player.pts }
          </Text>
        </View>
      </View>
      );
    }

}



module.exports = PlayerView;
