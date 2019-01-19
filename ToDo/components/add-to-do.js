import React from 'react';
import { View, TextInput, Button } from 'react-native';

class AddToDo extends React.Component {
  constructor() {
    super();
    
    this.state = {
      text: '',
    }
  }
  
  onTextInput(text) {
    this.setState({
      //text: text
      text
    })
  }

  addToDo() {
    this.props.add(this.state.text)
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <View>
        <TextInput 
          value={this.state.text}
          onChangeText={text => this.onTextInput(text)}
        />
        <Button 
          onPress={
            () => this.addToDo()
          }
          title="add" />
      </View>
      )
    }
  }
  
  export default AddToDo;