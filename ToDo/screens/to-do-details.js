import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {defaultNavigationOptions} from "../res/styles"

class ToDoDetails extends Component {
  static navigationOptions = {
    ...defaultNavigationOptions,
    title: 'Details',
  };

  render() {
    return (
    <View>
      <Text>
      {this.props.navigation.getParam('text')}
      </Text>
    </View>
    )
  }
}

export default ToDoDetails;