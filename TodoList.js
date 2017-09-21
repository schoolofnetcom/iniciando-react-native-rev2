import React, { Component } from 'react'
import { View, Text, Button, TextInput, Alert, FlatList } from 'react-native'

class Todolist extends Component {
	static navigationOptions = {
		title: 'Todo App'
	}

	constructor(props) {
		super(props)

		this.state = { todo: undefined, todos: [] }

		this.handleTodoName = this.handleTodoName.bind(this)
		this.saveTodo 		= this.saveTodo.bind(this)
		this.renderFlatList = this.renderFlatList.bind(this)
	}

	handleTodoName(text) {
		this.setState({
			todo: text
		})
	}

	saveTodo() {
		//text
		let { todo, todos } = this.state
		
		if (todo === '') {
			Alert.alert('Warning!', 'Can not be empty!!')
			return
		}
 
		return this.setState({
			todos: [...todos, { todo, id: Math.random() * 6 + 1 }],
			todo: ''			
		})	
	}

	renderFlatList(item) {
		return (
			<Text>
				{ item.todo }
			</Text>
		)
	}

	render() {
		let { todo, todos } = this.state
		return(
			<View>
				<TextInput value = { todo } onChangeText = { this.handleTodoName } />
				<Button title = "Add" onPress = { () => this.saveTodo() }></Button>
				<View>
					<FlatList 
						data = { todos }
						renderItem = { ({ item }) => this.renderFlatList(item) }
					/>
				</View>
			</View>
		)
	}
}

export default Todolist