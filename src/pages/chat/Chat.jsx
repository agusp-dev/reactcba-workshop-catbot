import React from 'react'
import CatItem from '../../components/catItem/CatItem'
import UserItem from '../../components/userItem/UserItem'
import InputChat from '../../components/inputChat/InputChat'
import './Chat.css'

const Chat = () => {

	return (
		<div className='chatbot-chat-container'>
			<div className='chatbot-chat-content'>
				<div className='chatbot-chat'>
					<div className='chatbot-chat-container-body'>
						<CatItem />
						<UserItem />
					</div>
					<div className='chatbot-chat-container-input'>
						<InputChat />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat