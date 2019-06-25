import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToolTip from './ToolTip';
import Home from '../assets/home.png';
import ModeButton from './ModeButton';
import Moon from '../assets/moon.png';
import Sun from '../assets/sun.png';
import CodeWindow from '../assets/code-window.png';
import SocialProfiles from './SocialProfiles';

export default class Header extends Component {
    state = { darkMode: false, mode: 'Light Mode' };

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
            <div id="main">
                <nav className="side-bar">
                    <Link className="link" to='/'><img className='nav-img' src={Home} alt='home'/></Link>
                    <ToolTip text="Home" />
                    <Link className="link" to='/projects'><img className='nav-img' src={CodeWindow} alt='projects'/></Link>
                    <ToolTip text="Projects" />
                    <ModeButton name="mode" mode={altText} action={this.toggleMode} modeImage={modeImage} />
                    <ToolTip text={altText} />
                </nav>
                {this.props.children}
                <SocialProfiles mode={this.state.darkMode}/>
            </div>
        )
    }
}