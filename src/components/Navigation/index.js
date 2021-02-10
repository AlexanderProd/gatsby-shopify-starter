import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import Logo from '../../images/cd-logo.jpg'

import StoreContext from '~/context/StoreContext'
import { CartCounter, Container, MenuLink, Wrapper, Bars, AppLogo, CartBtn, CartBtnLink } from './styles'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const activeStyles = {
  color: '#15cdfc'
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

  return (
    <Wrapper>
      <MenuLink to="/">
        {/* <h1>Logo</h1> */}
        <AppLogo src={Logo} alt={siteTitle} />
      </MenuLink>

      <Container>
        <MenuLink to="/pre-order" activeStyle={activeStyles}>Pre-Order</MenuLink>
        <MenuLink to="/custom" activeStyle={activeStyles}>Custom Orders</MenuLink>
        <MenuLink to="/about" activeStyle={activeStyles}>About</MenuLink>
        <MenuLink to="/faq" activeStyle={activeStyles}>F.A.Q.</MenuLink>
      </Container>

      <CartBtn>
        <CartBtnLink to="/cart" activeStyle={activeStyles}>Cart</CartBtnLink>
        {hasItems && <CartCounter>{quantity}</CartCounter>}
      </CartBtn>

      <Bars />

    </Wrapper >
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
