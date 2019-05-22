import React, { Component } from 'react';

export default class Zen extends Component {
	state = { zenSaying: '' };

	componentDidMount() {
		fetch('https://api.github.com/zen')
			.then(response => {
				const reader = response.body.getReader();
				reader.read().then((done, value) => {
					let string = new TextDecoder().decode(done.value)
					this.setState({ zenSaying: string });
				})
			})
	}

	render() {
		return (
			<div>"{this.state.zenSaying}" - GitHub</div>
		)
	}
}