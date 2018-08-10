/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Modal, TouchableHighlight, StatusBar } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = { modalVisible: false, transparent: true };

  setModalVisible = (modalVisible, transparent = true) => {
    this.setState({
      modalVisible,
      transparent
    });
  }

  componentDidMount() {
    StatusBar.setBackgroundColor('white');
    StatusBar.setBarStyle('dark-content');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableHighlight
          onPress={() => this.setModalVisible(true)}>
          <Text>Open Transparent Modal</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.setModalVisible(true, false)}>
          <Text>Open NOT Transparent Modal</Text>
        </TouchableHighlight>
        <Modal
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}
          transparent={this.state.transparent}>
          <StatusBar style="dark-content" backgroundColor="white" />
          <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={this.state.transparent ? { backgroundColor: 'red' } : {}} >
              This is the {!this.state.transparent ? 'NOT' : ''} transparent Modal
            </Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
