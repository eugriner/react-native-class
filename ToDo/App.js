import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ToDoList from './components/to-do-list';
import AddToDo from './components/add-to-do';
import { createStackNavigator, createAppContainer } from "react-navigation";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#1564bf',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white',
  }
}

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

class Home extends Component {

  static navigationOptions = {
    ...defaultNavigationOptions,
    title: 'To-do',
    header: null,
  };


  constructor(props) {
    super(props);
    
    // setTimeout( () => {
    //   this.props.navigation.navigate('ToDoDetails', {
    //     text: 'sho sho sho show',
    //   });
    // }, 3000);
    
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
          <ToDoList
            navigation={this.props.navigation}
            toDoList={this.state.toDos}
          />
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

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  ToDoDetails: { screen: ToDoDetails },
});


export default createAppContainer(AppNavigator);