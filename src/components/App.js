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
                <p>I'm tr;stan, a multicultural software developer, polyglot, and ideator, always ready to learn something new! My forte is creating apps with Dart and Flutter, but I am also versed in React-centric web development and the Firebase suite of cloud services.</p>
                </div>
				<Projects />
                <Skills />
				<Zen />
			</section>
        )
    }
}