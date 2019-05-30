import React from 'react';

const ModeButton = props => {
	return (
		<button id="mode" onClick={props.action}>
                <img id="mode-img" src={props.modeImage} alt={props.mode}/>
        </button>
    )
}

export default ModeButton