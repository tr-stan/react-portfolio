import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Skills from './Skills';
import Title from './Title';
import Header from './Header';
import Logo from './Logo';
import ToolTip from './ToolTip';
import ModeButton from './ModeButton';
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
                <div id="sideIcon">
                <ModeButton mode={altText} action={this.toggleMode} modeImage={modeImage} />
            	<ToolTip mode={altText} />
                </div>
                <Logo />
				<Title />
				<p>I'm Tristan, a multicultural full stack software developer, polyglot, and ideator, always ready to learn something new! I live in sunny Austin, TX.</p>
				<p>My forte is the MERN stack, but I enjoy Python, Vue, and SQL!</p>
				<Projects />
                <Skills />
				<SocialProfiles mode={this.state.darkMode}/>
				<Zen />
			</div>
        )
    }
}