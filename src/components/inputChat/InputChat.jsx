import React from 'react'
import './InputChat.css'

const InputChat = () => {
	return (
		<form className='chatbot-chat-input-container'>
			<input 
				type="text"
				placeholder='Write Message...' />
			<button type='submit'></button>
		</form>
	)
}

export default InputChat