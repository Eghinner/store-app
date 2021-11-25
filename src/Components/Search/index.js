import React from 'react'
import './styles.css'

const index = () => {
	return (
		<React.Fragment>
			<div className='search'>
				<form>
					<input type="text" placeholder='Search'/>
					<input type="submit"/>
				</form>
			</div>
		</React.Fragment>
	)
}

export default index