import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

class HttpComponent extends Component {
	static navigationOptions = {
		title: 'HTTP'
	}

	constructor(props) {
		super(props)
		
		this.state = { data: [] }

		this.renderItem = this.renderItem.bind(this)
	}

	componentDidMount() {
		// let self = this
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'GET',
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
			// body: { }
		})
		.then(response => response.json())
		.then((result) => {
			this.setState({
				data: result
			})
		})
	}

	renderItem(item) {
		return (
			<Text>{ item.title }</Text>
		)
	}	

	render() {
		let { data } = this.state
		// {/* renderItem = { ({ item }) => <Text>{ item.title }</Text> } */}
		return(
			<View>
				<FlatList 
					data = { data }
					renderItem = { ({ item }) => this.renderItem(item) }
				/>
			</View>
		)
	}
}

export default HttpComponent