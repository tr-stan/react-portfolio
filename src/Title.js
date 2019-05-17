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
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('Title component has mounted.');
        this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            let titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex });
        }, 4000)
    }

    render() {
        const title = TITLES[this.state.titleIndex];
        return (
            <h1>{title}</h1>
        )
    }
}

export default Title;