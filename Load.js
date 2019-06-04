// This component is dependant on Semantic ui css library..
// Please refer to index.html of this project for link
// Also on .ld class in 'load.css'

import React from 'react' ;
import './load.css' ;

const Load = (props) => {
	return (
		<div>
			<div className="ui active dimmer">
				<div className="ui big text loader"> Loading... </div>
				<div className="ld"> Please Wait, {props.msg}... </div>
			</div>
		</div>
		) ;
}

export default Load ;
