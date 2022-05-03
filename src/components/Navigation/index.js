import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { CartCounter, Container, InfoBanner, MenuLink, Wrapper } from './styles'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

  return (
    <>
      <InfoBanner>
        Check out my open source Project{' '}
        <a
          href="https://github.com/AlexanderProd/jam-stack-box"
          target="_blank"
        >
          JAMStackBox
        </a>{' '}
        to continuosly deploy Gatsby sites on your own.
      </InfoBanner>
      <Wrapper>
        <Container>
          <MenuLink to="/">{siteTitle}</MenuLink>
          <MenuLink to="/cart">
            {hasItems && <CartCounter>{quantity}</CartCounter>}
            Cart 🛍
          </MenuLink>
        </Container>
      </Wrapper>
    </>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
