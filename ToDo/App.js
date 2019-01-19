import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ToDoList from './components/to-do-list';
import AddToDo from './components/add-to-do';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [
        {
          text: 'estilar app'
        },
        {
          text: 'tirar warnings'
        },
        {
          text: 'build app'
        },
      ],
    }
  }

  addToDo(text) {
    this.setState({
      toDos: [ ...this.state.toDos, {text} ]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AddToDo add={ (text) => this.addToDo(text) }/>
        <ToDoList toDoList={this.state.toDos} />
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
