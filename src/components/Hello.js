import React from 'react'

const Hello = () => {

	return React.createElement(
		'div',
		{id: 'hello', className: 'yaya'},
		React.createElement('h1',null,'Hello lay par')
		)
}

export default Hello