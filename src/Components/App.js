import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Projects from './Projects';
import Skills from './Skills';
import Title from './Title';
import Logo from './Logo';
import Zen from './Zen';
import '../index.css'


export default class App extends Component {

    render() {
        return (
            <section className="main" style={this.props.style}>
				<Title />
                <div className="primary">
                <p>I'm tr;stan</p>
                <p>a multicultural full stack software developer, polyglot, and ideator, always ready to learn something new!</p>
				<p>My forte is the MERN stack, but I enjoy Python, Vue, and SQL!</p>
                </div>
				<Projects />
                <Skills />
				<Zen />
			</section>
        )
    }
}