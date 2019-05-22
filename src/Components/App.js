import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Selfie from '../assets/br-selfie.jpeg';
import Title from './Title';
import Zen from './Zen';
import '../index.css'

export default class App extends Component {
	state = { displayBio: false };

    toggleDisplayBio = () => {
    	this.setState({ displayBio: !this.state.displayBio });
    }

    render() {

        return (
            <div>
            	<img id='selfie' alt='profile' src={Selfie}/>
				<Title />
				<p>My name is Tristan.</p>
				<p>I'm a multicultural full stack software engineer, polyglot, and ideator, always ready to learn something new!</p>
				{
					this.state.displayBio ? (
						<div>
							<p>I live in Austin, and ride my bike everywhere I go.</p>
							<p>My forte is the MERN stack, but I also love Vue</p>
							<button onClick={this.toggleDisplayBio}>Show less</button>
						</div>
					) : (
						<div>
							<button onClick={this.toggleDisplayBio}>Read more</button>
						</div>
					)
				}
				<Projects />
				<SocialProfiles />
				<Zen />
			</div>
        )
    }
}