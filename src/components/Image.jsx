import React from 'react'
// import jumpa from '../assets/lilbaby.jpg'

const Image = (props) => {
	console.log(props)
	return (
		<div>
			<img src={props.src}/>
		</div>
	)
}

export default Image
