import React from 'react'
import Lottie from 'react-lottie'
import animationCat from './catAnim.json'

const Cat = ({history}) => {

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationCat
	}

	const handleOnClick = () => {
		history.push('/chat')
	} 

	return (
		<div 
			className='cat-container' 
			onClick={handleOnClick}>
			<Lottie 
				isClickToPauseDisabled={true}
				options={defaultOptions}
			/>
		</div>
	)
}

export default Cat