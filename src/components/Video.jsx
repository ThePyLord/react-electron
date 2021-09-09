import React from 'react'

const Video = (props) => {
	console.log(props.src)
	return (
		<div>
			<video src={props.src} ></video>
		</div>
	)
}


export default Video
