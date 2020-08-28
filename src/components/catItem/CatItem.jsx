import React from 'react'
import './CatItem.css'
import CatAvatar from '../../assets/cat.png'
import PropTypes from 'prop-types'

const CatItem = ({ msgArray }) => {
	return (
		<div className='cat-item-container'>
			<img src={CatAvatar} alt="Cat Avatar"/>
			<div className='cat-item-messages'>
				{msgArray.map((m, i) => {
					return <label key={ i }>{ m }</label>
				})}
			</div>
		</div>
	)
}

CatItem.propTypes = {
	msgArray: PropTypes.array.isRequired
}

export default CatItem