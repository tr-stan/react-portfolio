import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './Components/App';
import Projects from './Components/Projects';
import Header from './Components/Header';

let styles = {
	padding: '4vh 4vw'
};

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Switch>
			<Route exact path='/' render={() => <Header><App style={styles}/></Header>} />
			<Route path='/projects' render={() => <Header><Projects className='main' style={styles} /></Header>} />
		</Switch>
	</Router>,
	document.getElementById('root'));