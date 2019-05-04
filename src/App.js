import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            displayBio: true
        };
    }

    render() {

        return (
            <div>
				<h1>Hiya!</h1>
				<p>My name is Tristan.</p>
				<p>I'm a multicultural full stack software engineer, polyglot, and ideator, always ready to learn something new!</p>
				{
					this.state.displayBio ? (
						<div>
							<p>I live in Austin, and ride my bike everywhere I go.</p>
							<p>My forte is the MERN stack, but I also love Vue</p>
						</div>
					) : null
				}
			</div>
        )
    }
}