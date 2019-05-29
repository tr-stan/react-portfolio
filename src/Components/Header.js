import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Link to='/'>Home</Link>
			<Link to='/projects'>Projects</Link>
		</div>
	)
}

export default Header;