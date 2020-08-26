import React from 'react'
import CatItem from '../../components/catItem/CatItem'
import './Chat.css'

const Chat = () => {

	return (
		<div className='chatbot-chat-container'>
			<div className='chatbot-chat-content'>
				<div className='chatbot-chat'>
					<div className='chatbot-chat-container-body'>
						<CatItem />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat