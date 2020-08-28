import React from 'react'
import './UserItem.css'
import UserAvatar from '../../assets/user.png'
import PropTypes from 'prop-types'

const UserItem = ({ msgArray }) => {
	return (
		<div className='user-item-container'>
			<div className='user-item-messages'>
				<label>{ msgArray }</label>
			</div>
			<img src={UserAvatar} alt="User Avatar"/>
		</div>
	)
}

UserItem.propTypes = {
	msgArray: PropTypes.array.isRequired
}

export default UserItem