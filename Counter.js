import React, { Component } from 'react'
import { View, Text, Button, Alert } from 'react-native'

class Counter extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.title
	})

	// static navigationOptions = {
	// 	title: 'Counter App'
	// }

	constructor(props) {
		super(props)

		this.state = {
			counter: 0
		}

		this.descEvent = this.descEvent.bind(this)
		this.incEvent  = this.incEvent.bind(this)
	}

	descEvent() {
		let { counter } = this.state

		if (counter == 0) {
			this.setState({ counter: 0 })
		} else {
			this.setState({
				counter : counter - 1
			})	
	
		}
	}

	incEvent() {
		this.setState({
			counter : this.state.counter + 1
		})
	}

	render() {
		let { counter } = this.state
		let { params } = this.props.navigation.state
		return(
			<View>
				<Text>{ params.title }</Text>
				<Button title = "Desc" onPress = { () => this.descEvent() } />
				<Text>{ counter }</Text>
				<Button title = "Inc" onPress = { () => this.incEvent() } />
			</View>
		)
	}
}

export default Counter