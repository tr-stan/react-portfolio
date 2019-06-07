import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
	const style = {
		display: 'inline-block',
		clear: 'both',
		margin: 10,
		marginBottom: 30
	};

	return (
		<div>
			<div>
				<p style={style}><Link className="link" to='/'>Home</Link></p>
				<p style={style}><Link className="link" to='/projects'>Projects</Link></p>
			</div>
			{children}
		</div>
	)
}

export default Header;