import React from 'react' ;

const SeasonDisp = (props) => {
	let message = '' ;
	let img_class = 'icon massive' ;
	let dt = new Date() ;
	if (props.lat > 0 && dt.getMonth() > 2 && dt.getMonth() < 9 )
	{	message = "Summer...It's Hot !"
		img_class += ' sun' ;
	}
	else
	{		
		img_class += ' snowflake' ;
		message = "It's Winter, Isn't it chilly? "
	}
	return (
		<div>
			<i className={img_class} />
			<div className="message"> 
				{props.children}
				<br/>
				{message}
			</div>
			<i className={img_class + ' rt_img'} />
		</div>
		) ;
} ;

export default SeasonDisp ;