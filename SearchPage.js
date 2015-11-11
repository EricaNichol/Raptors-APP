'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: 'grey',
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#436BA8'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  homelogo: {
    resizeMode: 'contain',
    marginTop: 50,
    width: 217,
    height: 138,
  },
});

function urlForQueryAndPage(querystring) {
  return 'https://www.apitite.net/api/raptors/' + querystring + '/json';
  console.log('https://www.apitite.net/api/raptors/' + querystring + '/json');

};

var SearchResults = require('./SearchResults');

class SearchPage extends Component{
  constructor(props) {
    super(props)
    this.state = {
      searchString: null,
      isLoading: false,
      message: ''
    };
  }

  _executeQuery(query) {
    console.log(query);

    fetch(query)
  .then(response => response.json())
  .then(json => this._handleResponse(json))
  .catch(error =>
     this.setState({
      isLoading: false,
      message: 'No Results'
   }));
 }

  _handleResponse(response) {
      this.setState({ isLoading: false , message: '' });
      if (response.length > 1) {
        this.props.navigator.push({
          title: 'Results',
          component: SearchResults,
          passProps: { players: response }
        })
      } else {
        this.setState({ message: 'Location not recognized; please try again.'});
      }
    }



  onSearchPressed() {
    var query = urlForQueryAndPage(this.state.searchString);
    this._executeQuery(query);
  }

  render() {
    var spinner = this.state.isLoading?
    ( <ActivityIndicatorIOS
        hidden = 'true'
        size = 'large ' />):
      ( <View/> );

    return (
      <View style = { styles.container }>

        <Text style = { styles.welcome }>
          Welcome to my first IOS App.
        </Text>
        <Text style = { styles.description }>
          Nov 2: got search and listview working,
          will be adding a view and improve
          the search function
        </Text>
        <Text style = { styles.description }>
          Search by: positions
        </Text>
        <Text style = { styles.description }>
          must use dash as spaces, for example
          Power Forwards = power-forwards
          Point Guards   = point-guards
        </Text>

        <View style={styles.flowRight}>

        <TextInput
          style = {styles.searchInput}
          value = { this.state.searchstring}
          onChange = { this.onSearchTextChanged.bind(this)}
          placeholder='Search'/>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress = { this.onSearchPressed.bind(this) }>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableHighlight>
        </View>

        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Player</Text>
        </TouchableHighlight>

        <Image
         style = { styles.homelogo }
         source = {{ uri: "http://www.thestar.com/content/dam/thestar/sports/raptors/2014/01/10/raptors_rebranding_how_should_nba_team_pick_colours_for_its_newest_look/raptors_logo_blackgold.jpg" }}
         />

         <Text style={styles.description}>{this.state.message} </Text>

         { spinner }

      </View>
    );
  }

  onSearchTextChanged(event) {
  console.log('onSearchTextChanged');
  this.setState({ searchString: event.nativeEvent.text });
  console.log(this.state.searchString);
}
}

module.exports = SearchPage;
