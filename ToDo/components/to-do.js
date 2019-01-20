import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

class ToDo extends React.Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={ () => {
          this.props.navigation.navigate('ToDoDetails', {toDo: this.props.toDo})
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.toDo.text}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding: 7.5,
    borderRadius: 5,
    marginBottom: 7.5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 5,
    elevation: 5,
  },
  text: {

  },
})

export default ToDo;