import React from 'react'
import Box from './components/Box.jsx'
import Video from './components/Video.jsx'
import Image from './components/Image.jsx'
import lilbaby from './assets/lilbaby.jpg'

function sayKey() {
	document.onkeydown = e => {
		const p = document.querySelector('.key')
		if(e.code === 'Space') {
			p.textContent = "You've pressed Space"
		}
		else {
			p.textContent = `You've pressed: ${e.key}`
		}
	}
}
sayKey()

const App = () => {
	return (
		<div className="surprise">
			This Life is a parade.
			<p className="key">Waiting for input</p>
			<img src={lilbaby} alt="Lil Baby" />
		</div>
	)
}


export default App