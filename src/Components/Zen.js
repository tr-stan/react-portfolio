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
			.catch(error => {
				console.log("There was an error reading the GitHub zen quote", error);
			})
	}

	render() {
		let notes = "This quote was pulled from Github's 'Zen' API, which can be found at api.github.com/zen"
		let styles = {
			margin: '20px',
			padding: '10px 5px', 
			borderRadius: '50%',
			border: '1px solid rgb(240, 240, 240)',
		}
		return (
			<div id="zen"><p>"{this.state.zenSaying || "Design for failure."}" - GitHub</p><span data-tip={notes} style={styles} >º¡º</span></div>
		)
	}
}