import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import StoreContext from '../../context/StoreContext'
import { 
	Wrapper,
	Container,
	CartCounter 
} from './styles'

const H1 = props => (
	<h1
		style={{
			margin: 0,
		}}
	>
		<Link
			{...props}
			style={{
				color: `white`,
				textDecoration: `none`,
			}}
		>
			{props.children}
		</Link>
	</h1>
)

const countQuantity = lineItems => {
	let quantity = 0

	lineItems.forEach(item => {
		quantity = quantity + item.quantity
	});

	return quantity
}

const Navigation = ({ siteTitle }) => {
	const context = useContext(StoreContext)
	const { checkout } = context
	const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))

	useEffect(() => {
		setQuantity(countQuantity(checkout ? checkout.lineItems : []));
	}, [checkout]);

	return(
		<Wrapper>
			<Container>
				<H1 to='/'>
					{siteTitle}
				</H1>
				<H1 to='/cart'>
					{quantity !== 0 &&
						<CartCounter>
							{quantity}
						</CartCounter>
					}
					Cart 🛍
				</H1>
			</Container>
		</Wrapper>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
