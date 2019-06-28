import React, { Component } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import Title from './Title';
// import Logo from './Logo';
import Zen from './Zen';
import '../index.css'


export default class App extends Component {

    render() {
        return (
            <div id="app">
                <div className="primary">
				<Title />
				<p>I'm tr;be, a multicultural full stack software developer, polyglot, and ideator, always ready to learn something new! I live in sunny Austin, TX.</p>
				<p>My forte is the MERN stack, but I enjoy Python, Vue, and SQL!</p>
                </div>
				<Projects />
                <Skills />
				<Zen />
			</div>
        )
    }
}