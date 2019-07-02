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
                <div className="primary">
				<Title />
				<p>I'm <span data-tip="from tr-istan be-nnett" data-for="top">tr;be</span>,</p> 
                <p>a multicultural full stack software developer, polyglot, and ideator, always ready to learn something new! Currently living in sunny Austin, TX.</p>
				<p>My forte is the MERN stack, but I enjoy Python, Vue, and SQL!</p>
                <ReactTooltip id="top" place="top" />
                </div>
				<Projects />
                <Skills />
				<Zen />
			</section>
        )
    }
}