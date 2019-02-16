import React, { useContext } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled';

import StoreContext from '../context/StoreContext'

const CartCounter = styled.span({
  backgroundColor: `white`,
  color: `#663399`,
  borderRadius: `20px`,
  padding: `0 10px`,
  fontSize: `1.2rem`,
  float: `right`,
  margin: `-10px`,
})

const Header = ({ siteTitle }) => {
  const context = useContext(StoreContext)

  const { lineItems } = context.checkout

  return(
    <div
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h1
          style={{
            marginLeft: `auto`,
            marginBottom: 0,
          }}
          >
          {lineItems.length !== 0 &&
            <CartCounter>
              {lineItems.length}
            </CartCounter>
          }
          <Link
            to="/cart"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Cart🛍t
          </Link>
        </h1>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
