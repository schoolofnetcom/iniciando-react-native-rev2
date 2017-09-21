import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
// import PropsExample from './PropsExample'
import Counter from './Counter'
import HttpComponent from './HttpComponent'
import Todolist from './TodoList'

class App extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props)

    // this.state = { msg: 'Hello World' }
  } 

  // componentDidMount() {
  //   this.setState({
  //     msg: 'Hello State Leonan'
  //   })
  // }

  render() { 
    let { navigate } = this.props.navigation
    // let { msg } = this.state
    return (
      <View style={styles.container}>
        <Button title = "Go to Counter App" onPress = { () => navigate('Counter', { title: 'Counter App Navigation' }) }></Button>
        <Button title = "Go to Http App" onPress = { () => navigate('HttpComponent') }></Button>
        <Button title = "Go to Todolist App" onPress = { () => navigate('Todolist') }></Button>
        {/* <Counter></Counter> */}
      </View>
    );
  }
}

const StackApp = StackNavigator({
  Home: { screen: App },
  Counter: { screen: Counter },
  HttpComponent: { screen: HttpComponent },
  Todolist: { screen: Todolist }
})

// export default App
export default StackApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
