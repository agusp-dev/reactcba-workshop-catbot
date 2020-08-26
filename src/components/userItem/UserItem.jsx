import React from 'react'
import './UserItem.css'
import UserAvatar from '../../assets/user.png'


const UserItem = () => {
	return (
		<div className='user-item-container'>
			<div className='user-item-messages'>
				<label>Message.</label>
			</div>
			<img src={UserAvatar} alt="User Avatar"/>
		</div>
	)
}

export default UserItem