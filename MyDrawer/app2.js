import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import ArtisList from './ArtisList';

export default class PlatziMusic extends Component {
  
  render() {
    return (
      
      <View style={styles.container}>
        <ArtisList />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);