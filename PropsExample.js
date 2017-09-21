import React, { Component } from 'react'
import { View, Text } from 'react-native'

class PropsExample extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { name } = this.props
		return(
			<View>
				<Text>
					Hello Props { name }
				</Text>
			</View>
		)
	}
}

export default PropsExample