import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToolTip from './ToolTip';
import ModeButton from './ModeButton';
import Moon from '../assets/moon.png';
import Sun from '../assets/sun.png';
import SocialProfiles from './SocialProfiles';

export default class Header extends Component {
    state = { darkMode: true, mode: 'Dark Mode' };

    toggleMode = () => {
        this.setState({
            darkMode: !this.state.darkMode
        });
        this.state.darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')
    }

    render() {
        const style = {
            display: 'inline-block',
            clear: 'both',
            margin: 10,
            marginBottom: 30
        };
        let modeImage = this.state.darkMode ? Moon : Sun;
        let altText = this.state.darkMode ? 'Dark Mode' : 'Light Mode';
        return (
            <div>
                <div className="sideIcon">
                    <ModeButton mode={altText} action={this.toggleMode} modeImage={modeImage} />
                    <ToolTip mode={altText} />
                </div>
                <div className="sideIcon">
                <p style={style}><Link className="link" to='/'>Home</Link></p>
                <p style={style}><Link className="link" to='/projects'>Projects</Link></p>
                </div>
                {this.props.children}
                <SocialProfiles mode={this.state.darkMode}/>
            </div>
        )
    }
}