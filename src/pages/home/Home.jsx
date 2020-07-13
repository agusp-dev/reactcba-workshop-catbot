import React from 'react'
import Cat from '../../components/cat/Cat'

const Home = ({history}) => {
	return (
		<div>
			<Cat history={history}/>
			<label>Hola Humano!</label>
		</div>
	)
}

export default Home