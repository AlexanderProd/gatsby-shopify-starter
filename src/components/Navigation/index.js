import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { 
	Wrapper,
	Container,
	CartCounter,
	MenuLink
} from './styles'

const countQuantity = lineItems => {
	let quantity = 0

	lineItems.forEach(item => {
		quantity = quantity + item.quantity
	});

	return quantity
}

const Navigation = ({ siteTitle }) => {
	const { store: {checkout} } = useContext(StoreContext)
	const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))

	useEffect(() => {
		setQuantity(countQuantity(checkout ? checkout.lineItems : []))
	}, [checkout])

	return(
		<Wrapper>
			<Container>
				<MenuLink to='/'>
					{siteTitle}
				</MenuLink>
				<MenuLink to='/cart'>
					{quantity !== 0 &&
						<CartCounter>
							{quantity}
						</CartCounter>
					}
					Cart 🛍
				</MenuLink>
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
