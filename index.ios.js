/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
let React = require('react-native');
let {
  Animated,
  AppRegistry,
  NavigatorIOS,
  Easing,
  Image,
  ScrollView,
  StatusBarIOS,
  StyleSheet,
  Text,
  View,
} = React;

var SearchPage = require('./SearchPage');


class RaptorsApp extends React.Component{
  render() {
    return(
      <React.NavigatorIOS
       style = { styles.container }
       initialRoute = {{
         title: 'Raptors App',
         component: SearchPage,
       }}/>
    );
  }
}

  var styles = StyleSheet.create({
    text: {
      color: 'black',
      backgroundColor: 'white',
      fontSize: 30,
      margin: 80
    },
    container: {
      flex: 1,
    }
  });


AppRegistry.registerComponent('rapsapp', () => RaptorsApp);
