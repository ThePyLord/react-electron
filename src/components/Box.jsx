import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


function Box(props) {
	const ref = useRef()
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	
	useFrame((state, delta) => ref.current.rotation.x += 0.01)

	return (
		<mesh {...props} ref={ref} scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}

export default Box
