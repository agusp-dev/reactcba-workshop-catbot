import React from 'react'
import './InputChat.css'

const InputChat = ({ sendMessage, getMyMessage }) => {
	return (
		<form 
			className='chatbot-chat-input-container'
			onSubmit={ e => sendMessage(e) }>
			<input 
				type="text"
				placeholder='Write Message...'
				onChange={ e => getMyMessage(e.target.value) } />
			<button type='submit'></button>
		</form>
	)
}

export default InputChat