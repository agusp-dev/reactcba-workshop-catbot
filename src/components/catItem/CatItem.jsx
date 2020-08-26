import React from 'react'
import './CatItem.css'
import CatAvatar from '../../assets/cat.png'

const CatItem = () => {
	return (
		<div className='cat-item-container'>
			<img src={CatAvatar} alt="Cat Avatar"/>
			<div className='cat-item-messages'>
				<label>Message.</label>
			</div>
		</div>
	)
}

export default CatItem