import React from 'react';

const ToolTip = props => {
        return (
            <div className="tooltip">
				<div className="tooltip-arrow"></div>
				<div className="tooltip-content">{props.mode}</div>
			</div>
        )
}

export default ToolTip;