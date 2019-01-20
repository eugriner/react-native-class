import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, PermissionsAndroid} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import ToDoList from './components/to-do-list';
import AddToDo from './components/add-to-do';

import ToDoDetails from './screens/to-do-details';

import {defaultNavigationOptions} from "./res/styles"



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
          id:1,
          text: 'estilar app'
        },
        {
          id:2,
          text: 'tirar warnings'
        },
        {
          id:3,
          text: 'build app'
        },
        {
          id:4,
          text: '1'
        },
        {
          id:5,
          text: '2'
        },
        {
          id:6,
          text: '3'
        },
        {
          id:7,
          text: '4'
        },
        {
          id:8,
          text: '5'
        },
        {
          id:9,
          text: '6'
        },
        {
          id:10,
          text: '7'
        },
        {
          id:11,
          text: '8'
        },
        {
          id:12,
          text: 'LAST'
        },
      ],
      idCount: 13,
    }
    this.requestMapsPermission();
  }

  async requestMapsPermission() {
    try {
      const isGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'To-do app location access',
          'message': 'We need your location to know where you are!',
        }
      )
      this.setState({
        geolocationPermissionGranted: isGranted === 'granted',
      })
    } catch (err) {
      console.warn("requestMapsPermission: Something went wrong!");
      console.warn(err);
      return;
    }
  }

  setToDoLocation(id, coords) {
    const { toDos } = this.state;
    toDos.find(toDo => toDo.id === id).location = coords;
    this.setState({
      toDos: toDos
    });
  }

  addToDo(text) {
    const id = this.state.idCount + 1;
    this.setState({
    //  toDos: [ ...this.state.toDos, {text} ]
      toDos: [{id, text}].concat(this.state.toDos),
      idCount: id,
    },// () => console.warn(id)
    );

    if (this.state.geolocationPermissionGranted) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {this.setToDoLocation(id, pos.coords)}, //callback
        null, //erro
        {enableHighAccuracy: true} //type of accuracy
      )
    }
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