import React, { Component } from 'react';

const TITLES = [
    'hello world',
    'selâmlar dünya',
    'bonjour le monde',
    '안녕하세요 세상',
    'سلامونه نړۍ',
    'hola mundo',
    'こんにちは 世界'
]

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
    	this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }

    componentWillUnmount() {
    	// clearing interval and timeout to makesure we don't call
    	// setState on an unmounted timeout or interval
    	clearInterval(this.titleInterval);
    	clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            let titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000)
    }

    render() {
    	const { titleIndex, fadeIn } = this.state
        const title = TITLES[titleIndex];
        return (
            <div id="title"><h1 className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</h1></div>
        )
    }
}

export default Title;