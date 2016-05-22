'use strict'

import React, { Component } from 'react';

var SearchPage = require('./SearchPage');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class Fitness extends Component {
  render() {
    return (<NavigatorIOS style={styles.container} initialRoute={{
      title: 'Property Finder',
      component: SearchPage,
    }}/>);
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('Fitness', () => Fitness);
