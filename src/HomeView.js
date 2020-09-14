import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ArtisList from './ArtisList';


export default class HomeViwe extends Component {
  
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

