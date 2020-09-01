import React from 'react'
import './UserItem.css'
import UserAvatar from '../../assets/user.png'

const UserItem = ({ msgArray }) => {
	return (
		<div className='user-item-container'>
			<div className='user-item-messages'>
				{msgArray instanceof Array ? (
					msgArray.map((m, i) => {
						return <label key={ i }>{ m }</label>
					})
				) : (
					<label>{ msgArray }</label>
				)}
			</div>
			<img src={UserAvatar} alt="User Avatar"/>
		</div>
	)
}

export default UserItem