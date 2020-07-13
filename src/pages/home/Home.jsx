import React from 'react'
import Cat from '../../components/cat/Cat'
import { Fade } from 'react-reveal'
import './Home.css'

const Home = ({history}) => {
	return (
		<div className='home-catbot-container'>
			<div className='home-catbot-content'>
				<Cat history={history}/>
				<div className='home-catbot-greeting'>
					<Fade opposite>
						<h1>Hi Human!</h1>
					</Fade>
					<Fade opposite>
						<label>Do you want to chat?</label>
						<label>Click me to start :)</label>
					</Fade>
				</div>
			</div>
		</div>
	)
}

export default Home