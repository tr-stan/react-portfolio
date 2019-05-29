import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './Components/App';
import Projects from './Components/Projects';

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/projects' component={Projects} />
		</Switch>
	</Router>,
	document.getElementById('root'));