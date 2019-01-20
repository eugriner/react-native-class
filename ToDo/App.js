import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
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
        {
          text: '1'
        },
        {
          text: '2'
        },
        {
          text: '3'
        },
        {
          text: '4'
        },
        {
          text: '5'
        },
        {
          text: '6'
        },
        {
          text: '7'
        },
        {
          text: '8'
        },
        {
          text: 'LAST'
        },
      ],
    }
  }

  addToDo(text) {
    this.setState({
    //  toDos: [ ...this.state.toDos, {text} ]
    toDos: [{text}].concat(this.state.toDos)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AddToDo add={ (text) => this.addToDo(text) }/>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ToDoList toDoList={this.state.toDos} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
