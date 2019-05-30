import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Skills from './Skills';
import Title from './Title';
import Header from './Header';
import Logo from './Logo';
import ToolTip from './ToolTip';
import Moon from '../assets/moon.png';
import Sun from '../assets/sun.png';
import Zen from './Zen';
import '../index.css'


export default class App extends Component {
	state = { displayBio: false, darkMode: true, mode: 'Dark Mode' };

    toggleMode = () => {
    	this.setState({
    		darkMode: !this.state.darkMode
    	});
    	this.state.darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')
    }

    render() {
        let modeImage = this.state.darkMode ? Moon : Sun;
        let altText = this.state.darkMode ? 'Dark Mode' : 'Light Mode';
        return (
            <div id="app">
            	<ToolTip mode={altText} toggleMode={this.toggleMode} modeImage={modeImage}/>
                <Header />
                <Logo />
				<Title />
				<p>My name is Tristan.</p>
				<p>I'm a multicultural full stack software engineer, polyglot, and ideator, always ready to learn something new!</p>
				<p>I live in Austin, and ride my bike everywhere I go.</p>
				<p>My forte is the MERN stack, but I enjoy Python, Vue, and SQL!</p>
				<Projects />
                <Skills />
				<SocialProfiles mode={this.state.darkMode}/>
				<Zen />
			</div>
        )
    }
}