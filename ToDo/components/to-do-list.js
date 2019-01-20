import React from 'react';
import { View, StyleSheet } from 'react-native';
import ToDo from './to-do';

class ToDoList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.toDoList.map((toDo) => (
          <ToDo text={toDo.text} />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding: 15,
  }
})

export default ToDoList;