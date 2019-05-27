import React, { Component } from 'react';

class ToolTip extends Component {
	state = {
		
	}
    render() {
        return (
            <div className="tooltip">
				<div className="tooltip-arrow"></div>
				<div className="tooltip-content">{this.props.mode}</div>
			</div>
        )
    }
}

export default ToolTip;