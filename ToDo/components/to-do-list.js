import React from 'react';
import { View } from 'react-native';
import ToDo from './to-do';

class ToDoList extends React.Component {
  render() {
    return (
      <View>
        {this.props.toDoList.map((toDo) => (
          <ToDo text={toDo.text} />
        ))}
      </View>
    )
  }
}

export default ToDoList;