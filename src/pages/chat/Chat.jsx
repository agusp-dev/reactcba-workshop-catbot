import React, { useState } from 'react'
import CatItem from '../../components/catItem/CatItem'
import UserItem from '../../components/userItem/UserItem'
import InputChat from '../../components/inputChat/InputChat'
import './Chat.css'

const Chat = () => {

	const [ msg, setMsg ] = useState({})
	const [ chat, setChat ] = useState([
		{
			id: 0,
			emitter: 'cat',
			msg: ['Hi!', 'How is your name?']
		}
	])

	return (
		<div className='chatbot-chat-container'>
			<div className='chatbot-chat-content'>
				<div className='chatbot-chat'>
					<div className='chatbot-chat-container-body'>

						{chat.map((m, i) => {
							return (
								m.emitter === 'cat' ? (
									<CatItem 
										key={i}
										msgArray={m.msg} />
								) : (
									<UserItem 
										key={i}
										msgArray={m.msg} />
								)
							)
						})}
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