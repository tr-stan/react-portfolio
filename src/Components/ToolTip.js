import React, { Component } from 'react';

class ToolTip extends Component {
    render() {
        return (
            <div className="tooltip">
            	<button id="mode" onClick={this.props.toggleMode}>
                    <img id="mode-img" src={this.props.modeImage} alt={this.props.mode}/>
                </button>
				<div className="tooltip-arrow"></div>
				<div className="tooltip-content">{this.props.mode}</div>
			</div>
        )
    }
}

export default ToolTip;