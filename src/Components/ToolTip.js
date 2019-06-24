import React from 'react';

const ToolTip = props => {
        return (
            <div className="tooltip">
				<div className="tooltip-arrow"></div>
				<div className="tooltip-content">{props.text}</div>
			</div>
        )
}

export default ToolTip;