import React, { useState } from 'react'
import CatItem from '../../components/catItem/CatItem'
import UserItem from '../../components/userItem/UserItem'
import InputChat from '../../components/inputChat/InputChat'
import './Chat.css'

const Chat = () => {

	let idCounter = 0

	const [ msg, setMsg ] = useState({})
	const [ chat, setChat ] = useState([
		{
			id: 0,
			emitter: 'cat',
			msg: ['Hi!', 'How is your name?']
		}
	])

	const getMyMessage = value => {
		idCounter++
		setMsg({
			id: idCounter,
			emitter: 'User',
			msg: value
		})
	}

	const sendMessage = e => {
		e.preventDefault()
		setChat([ ...chat, msg ])
	}

	const firstResponse = name => {
		let newMsg = {
			id: idCounter + 10,
			emitter: 'Cat',
			msg: [
				'Mucho gusto, ' + name + '!',
				'Mi nombre es Dimitri, soy un catbot aun en desarrollo',
				'Haceme una pregunta, y con gusto respondo.'
			]
		}
		if (newMsg) {
			setChat([ ...chat, newMsg ])
		}
	}

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
						<InputChat 
							getMyMessage={ getMyMessage }
							sendMessage={ sendMessage } />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat