import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Profile from '../assets/tri-be_logo.png';
import Title from './Title';
import Zen from './Zen';
import '../index.css'


export default class App extends Component {
	state = { displayBio: false, darkMode: true, mode: 'dark' };

    toggleMode = () => {
    	this.setState({
    		darkMode: !this.state.darkMode
    	});
    	this.state.darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')
    }

    render() {

        return (
            <div>
            	<button id="mode" onClick={this.toggleMode}>{this.state.darkMode ? 'Dark' : 'Light'} Mode</button>
            	<img id='selfie' alt='profile' src={Profile}/>
				<Title />
				<p>My name is Tristan.</p>
				<p>I'm a multicultural full stack software engineer, polyglot, and ideator, always ready to learn something new!</p>
				<p>I live in Austin, and ride my bike everywhere I go.</p>
				<p>My forte is the MERN stack, but I enjoy Python, Vue, and SQL!</p>
				<Projects />
				<SocialProfiles />
				<Zen />
			</div>
        )
    }
}