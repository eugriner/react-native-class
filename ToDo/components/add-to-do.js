import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


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
      <View style={styles.container}>
        <TextInput style={styles.input}
          value={this.state.text}
          onChangeText={text => this.onTextInput(text)}
        />
        <Button style={styles.button}
          disabled={!this.state.text}
          onPress={
            () => this.addToDo()
          }
          title="add" />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding: 15,
    backgroundColor: '#1564bf',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 15,
  },
  button: {
    flexShrink: 0,
    borderRadius:10,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#9be7ff',
  },
})
  
export default AddToDo;