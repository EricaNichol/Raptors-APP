'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  playerName: {
  fontSize: 25,
  fontWeight: 'bold',
  color: '#48BBEC',
  marginLeft: 20
  },
  separator: {
    height: 1,
    backgroundColor: 'black'
  }
});

var PlayerView = require('./PlayerView');

class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.players)
    };
  }

  rowPress(data) {
    this.props.navigator.push({
      title: "Player",
      component: PlayerView,
      passProps: { player: data }
    });
  }

  renderRow(dataSource) {
    return (
      <TouchableHighlight
          onPress = { this.rowPress.bind(this, dataSource) }
          underlayColor='#dddddd'>
        <View>
          <Text style = { styles.playerName }> { dataSource.player } </Text>
          <View style = { styles.separator } />
        </View>

      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this) }
         />
    );
  }

}

module.exports = SearchResults;
