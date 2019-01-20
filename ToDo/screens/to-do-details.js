import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {defaultNavigationOptions} from "../res/styles"

class ToDoDetails extends Component {
  static navigationOptions = {
    ...defaultNavigationOptions,
    title: 'Details',
  };

  render() {
    const toDo = this.props.navigation.getParam('toDo');
    // console.warn(toDo);
    return (
    <View style={styles.container}>
      <Text>
        {toDo.text}
      </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
    borderRadius: 5,
    margin: 15,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 5,
    elevation: 5,
  },
});

export default ToDoDetails;