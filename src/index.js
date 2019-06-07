import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './Components/App';
import Projects from './Components/Projects';
import Header from './Components/Header';

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Switch>
			<Route exact path='/' render={() => <Header><App /></Header>} />
			<Route path='/projects' render={() => <Header><Projects /></Header>} />
		</Switch>
	</Router>,
	document.getElementById('root'));