import React from 'react'
import Lottie from 'react-lottie'
import animationCat from './catAnim.json'

const Cat = () => {

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationCat
	}

	const handleOnClick = () => {
		console.log('clsssick')
	} 

	return (
		<div 
			className='cat-container' 
			onClick={handleOnClick}>
			<Lottie 
				isClickToPauseDisabled={true}
				options={defaultOptions}
			/>
			<label>¡Hola Humano!</label>
		</div>
	)
}

export default Cat