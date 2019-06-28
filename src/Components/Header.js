import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Home from '../assets/home.png';
import ModeButton from './ModeButton';
import Moon from '../assets/moon.png';
import Sun from '../assets/sun.png';
import CodeWindow from '../assets/code-window.png';
import SocialProfiles from './SocialProfiles';

export default class Header extends Component {
    state = {
        darkMode: false,
        mode: 'Light Mode',
        hover: false
    };

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
                <div id="sidebar">
                    <nav>
                        <Link className="link" to='/'>
                        <img data-tip="Home" className='nav-img' src={Home} alt='home'/>
                        </Link>
                        <Link className="link" to='/projects'>
                        <img data-tip="Projects" className='nav-img' src={CodeWindow} alt='projects'/>
                        </Link>
                        <ModeButton name="mode" mode={altText} action={this.toggleMode} modeImage={modeImage}>
                        </ModeButton>
                        <SocialProfiles mode={this.state.darkMode}/>
                        <ReactTooltip place="right" type="dark" effect="solid"/>
                    </nav>
                </div>
                {this.props.children}
            </div>
        )
    }
}